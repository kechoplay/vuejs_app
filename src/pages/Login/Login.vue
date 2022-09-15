<template>
    <div>
        <layout-app :isLogin="false"></layout-app>
        <div class="app-container">
            <div class="content login-content">
                <div class="logo">
                    <img :src="logo" alt="">
                </div>

            <div class="description-form fs-16 font-weight-bold m__top--48 color__primary_black">
                ログイン
            </div>
            <div class="w-550-px m__top--48 mx-auto">
                <div class="fs-14 font-weight-bold color__primary_black text-left">どちらでログインするかを選択してください。</div>
                <div class="d-flex justify-center align-center m__top--16">
                    <div class="radio-button d-flex justify-center align-center m__right--12" @click="selectOption(radio.value)" v-for="radio,index in radios" :key="index">
                        <img :src="option == radio.value ? iconRadioActive : iconRadio" alt="">
                        <span :class="{ active : option == radio.value}" class="radio-button-label m__left--12 m__top--0">{{radio.text}}</span>
                    </div>
                </div>
            </div>
            <div v-if="option === 1" class="form-group m__top--48">
                <label class="m__top--32 m__bottom--8">Eメールアドレス</label>
                <input
                    v-model="v$.form.email.$model"
                    @input="v$.form.email.$reset"
                    class="form-control large"
                    placeholder="carte@exampel.com">
                <div v-if="v$.form.email.$errors">
                    <div v-if="v$.form.email.required.$invalid" class="error-text">メールを入力してください。</div>
                    <!-- <div v-if="v$.form.email.email.$invalid" class="error-text">メールアドレスに正しい形式を指定してください。</div> -->
                </div>
                <label class="m__top--24 m__bottom--8">パスワード</label>
                <input
                    v-model="v$.form.password.$model"
                    @input="v$.form.password.$reset"
                    class="form-control large"
                    type="password"
                    placeholder="パスワード">
                <div v-if="v$.form.password.$errors">
                    <div v-if="v$.form.password.required.$invalid" class="error-text">パスワードを入力してください。</div>
                    <div v-if="v$.form.password.minLength.$invalid" class="error-text">パスワードは8文字以上で指定してください。</div>
                </div>
            </div>

            <div v-if="option === 2" class="facebook-login w-550-px mx-auto mt-12">
                <div class="d-flex w-100 justify-center align-center py-2">
                    <img :src="icFacebook" alt="">
                    <div class="font-weight-bold fs-14 ml-3">Facebookでログイン</div>
                </div>
            </div>

            <div v-if="option === 1" class="m__top--48">
<!--                <button-component-->
<!--                    v-if="!$store.getters.isLoading"-->
<!--                    :text="textButton"-->
<!--                    :small=false-->
<!--                    :func="login"-->
<!--                    :width="widthButton"-->
<!--                ></button-component>-->
<!--                <div v-if="$store.getters.isLoading" class="donut"></div>-->
            </div>

                <div class="text-link" @click="$router.push({name: 'register-step-2'})">新規サービス登録</div>
            </div>

        </div>
    </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import {required, minLength} from "@vuelidate/validators"
// import { ACTION_LOGIN_USER } from "@/stores/auth_users/actions"
// import ButtonComponent from "@/components/common/ButtonComponent.vue";
import LayoutApp from "@/components/layouts/Navbar.vue";

export default {
    name: "login-component",
    components : {
        // ButtonComponent,
        LayoutApp
    },
    data(){
        return {
            logo : require('@/assets/images/svgs/logo_carte.svg'),
            iconRadio : require('@/assets/images/icons/ic_radio.svg'),
            iconRadioActive : require('@/assets/images/icons/ic_radio_active.svg'),
            icFacebook: require('@/assets/images/icons/ic_facebook.svg'),
            textButton : "ログイン",
            widthButton : "160px",
            step : 1,
            option : 1,
            radios : [
                {
                    value : 1,
                    text : "スタートアップとしてログイン"
                },
                {
                    value : 2,
                    text : "エンジェル投資家としてログイン"
                }
            ],
            form: {
                email: '',
                password: '',
            },
        }
    },
    setup: () => ({ v$: useVuelidate({$lazy: true}) }),
    validations() {
        return {
            form: {
                email: {
                    required,
                    // email,
                },
                password: {
                    required,
                    minLength: minLength(8)
                }
            }
        }
    },
    watch: {
        option () {
            this.v$.form.$reset();
            this.form.email = ''
            this.form.password = ''
        }
    },
    methods: {
        login() {
            this.v$.form.$touch();
            if (!this.v$.form.$error) {
                // const data = {
                //     password: this.form.password,
                //     email: this.form.email,
                //     remember_token: false,
                //     role: this.option,
                // }
                // this.$store.dispatch(ACTION_LOGIN_USER, data)
                // .then(() => {
                //     this.$router.push({name : 'home'})
                //     // this.$toast.success('Login success')
                // })
                // .catch(() => {
                //
                // })
            }
        },
        selectOption(value) {
            this.option = value;
        }
    },
    // beforeRouteEnter(to, from, next) {
        // next((vm) => {
            // const isAuthenticated = vm.$store.getters.accessToken || !!localStorage.getItem('accessToken')
            // if (isAuthenticated) {
            //     vm.$router.push({name: 'home'})
            // }
        // })
    // }
} 
</script>
<style scoped lang="scss">
.description-form { 
    line-height: 32px;
}
.text-link {
    font-weight: 700;
    font-size: 14px;
    line-height: 200%;
    letter-spacing: 0.005em;
    color: #333333;
    margin-top: 48px;
    text-decoration-line: underline;
    cursor: pointer;
}
.radio-button {
    cursor: pointer;
}
.facebook-login {
    cursor: pointer;
}
.facebook-login > div {
    background: #FBFBFB;
    border: 1px solid #EAEDEB;
    border-radius: 8px;
}
.facebook-login > div:hover {
    background: #d4d2d2;
}

</style>