<template>
  <div>
    <Navbar :isLogin="isLogged"/>
    <div class="app-wrapper-container">
      <div class="app-container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar";
export default {
  name: "layout-app",
  components: {
    Navbar,
  },
  data() {
    return {
      statusDialog: false
    }
  },
  computed: {
    isLogged() {
      return this.$store.getters.accessToken || !!localStorage.getItem('accessToken');
    }
  },
  methods: {
    open() {
      this.$refs.popup.open()
    }
  }
}
</script>