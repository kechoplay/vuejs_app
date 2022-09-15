<template>
  <v-card class="overflow-hidden rounded-0 nav-custom">
    <v-app-bar
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <img :src="logo" alt="">
      
      <v-spacer></v-spacer>
      
<!--      <div class="list-menu d-flex align-center" v-if="isLogin">-->
      <div class="list-menu d-flex align-center">
        <div>
          <v-btn 
            v-for="menu, index in sideMenus" 
            :key="'menu'+ index" 
            class="btn-nav-custom" 
            :class="[menu.class, $route.name == menu.router ? 'btn-nav-active' : '']"
            @click="redirectTo(menu.router)"
          >
            {{menu.text}}
          </v-btn>
        </div>

        <div v-if="$store.getters['authUser'] && $store.getters['authUser'].role === 2">
          <v-btn 
            v-for="menu, index in investorMenus" 
            :key="'menu'+ index" 
            class="btn-nav-custom" 
            :class="[menu.class, $route.name == menu.router ? 'btn-nav-active' : '']"
            @click="redirectTo(menu.router)"
          >
            {{menu.text}}
          </v-btn>
        </div>

        <v-btn class="btn-nav-custom m__right--8">
          <img :src="icBell" alt="">
          <div class="badge-custom">
          12
          </div>
        </v-btn>
        <div class="profile d-flex align-center" @click="reclick">
          <!-- <div>
            <img :src="avatar" alt="">
          </div> -->
          <div class="m__left--12" v-if="authUser">
            <div class="profile-name">
              {{ authUser.name }}
            </div>
            <div class="profile-name-company">
              {{ authUser.organization_name }}
            </div>
          </div>
        </div>
        <v-menu
          left
          bottom
          v-model="isOpened"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              class="btn-nav-custom btn-arrow-down m__top--5"
              ref="dropdown"
            >
              <img :src="icArrowDown" alt="">
            </v-btn>
          </template>
      
          <v-list class="dropdown-menu">
            <v-list-item>
              <v-list-item-title>
                <router-link :to="{ name: 'Account Setting' }">アカウント設定</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="logout">ログアウト</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </v-card>
</template>
<script>
import { plan_navbar, investor_navbar } from "./../../commons/plan_const";
import {
  ACTION_USER_LOGOUT
} from '@/stores/auth_users/actions'
export default {
  name: "NavBar",
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      logo: require('@/assets/images/logo.svg'),
      icBell: require('@/assets/images/icons/ic_bell.svg'),
      icArrowDown: require('@/assets/images/icons/ic_arrow_down.svg'),
      avatar: require('@/assets/images/avatar.png'),
      sideMenus: plan_navbar,
      investorMenus: investor_navbar,
      isOpened: false
    }
  },
  computed: {
    authUser() {
      return this.$store.getters['authUser']
    }
  },
  methods: {
    redirectTo(routerName){
      if(routerName && this.$route.name != routerName) {
        this.$router.push({name: routerName})
      }
    },
    logout() {
      this.$store.dispatch(ACTION_USER_LOGOUT)
        .then(() => {
          this.$toast.success('ログアウトしました')
          this.$router.push({name: 'Login'})
        })
        .catch(() => {})
    },
    reclick() {
      this.isOpened = true
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
.nav-custom {
  box-shadow: 0px 1px 0px #EAEDEB!important;
  height: 52px !important;
  header {
    height: 52px !important;
  }
  .v-toolbar__content {
    padding: 0 121px;
    background-color: $white !important;
    height: 52px !important;
  }
  .btn-nav-custom {
    background-color: $white !important;
    border: none !important;
    box-shadow: unset;
    color: $secondary_color !important;
    font-size: 14px !important;
    line-height: 20.27px !important;
    font-weight: 400 !important;
    border-radius: 0;
    height: 100% !important;
    padding: 12px 8px 16px 8px !important;
  }
  
  .btn-nav-custom:before {
    background-color: unset !important;
  }
  
  .btn-nav-active {
    font-weight: 700 !important;
    color: $primary_black !important;
    border-bottom: 3px solid $corporate_color_1 !important;
  }
  
  .badge-custom {
    background-color: $primary_red;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 10px;
    color: $white;
    margin-left: 4px;
  }
  .profile {
    font-weight: 700;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: solid 1px #ccc;
    }
    .profile-name {
      color: $primary_black;
      line-height: 20.27px;
      font-size: 14px;
    }
    .profile-name-company {
      color: $primary_secondary;
      line-height: 11.5px;
      font-size: 10px;
    }
  }

  .list-menu {
    height: 100%;
    & > div {
      height: 100%;
    }
  }

  .btn-arrow-down {
    width: 16px !important;
    margin-left: 8px;
    padding: 0 !important;
  }
}
@media only screen and (max-width: 768px) {
  .nav-custom {
    .v-toolbar__content {
      padding: 0 20px !important;
    }
  }
}
</style>
<style lang="scss">
.dropdown-menu {
  .v-list-item__title a, div {
    cursor: pointer;
    color: #333333;
    text-decoration: none;
  }
}
</style>