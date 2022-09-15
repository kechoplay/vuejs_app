// import Layout from "@/components/layouts/LayoutApp";
import Login from "@/pages/Login/Login";
// import StepOne from "@/pages/Register/StepOne";
// import StepTwo from "@/pages/Register/StepTwo";
// import StepThree from "@/pages/Register/StepThree";
// import StepFour from "@/pages/Register/StepFour";
// import StepFiveSixSeven from "@/pages/Register/StepFiveSixSeven";
// import ManualInput from  "@/pages/Register/ManualInput";
// import Contact from "@/pages/contact/Contact";
// import CapitalPolicy from '@/pages/capital-policy/capital-policy';
// import EditPolicy from '@/pages/capital-policy/edit-policy';
// import InvestmentList from '@/pages/investor/investment-list';
// import NoticeList from '@/pages/notices/notice-list';
// import NoticeDetail from '@/pages/notices/notice-detail';
// import SimulationScreen from '@/pages/simulation/simulation-screen';
// import SimulationList from '@/pages/simulation/simulation-list';
// import AccountSetting from '@/pages/account-setting/AccountSetting'
// import store from '@/stores'
// import { ROLE_STARTUP, ROLE_INVESTOR } from "@/commons/plan_const";

export const web_router = [
    {
        path:'/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'ログイン',
            isPublic: true,
            isLogin: true,
        },
    },
    // {
    //     path:'/register-step-1',
    //     name: 'register-step-1',
    //     component: StepOne,
    //     meta: {
    //       title: 'Register step 1',
    //       isPublic: true,
    //       isLogin: true,
    //     },
    // },
    // {
    //     path:'/register-step-2',
    //     name: 'register-step-2',
    //     component: StepTwo,
    //     meta: {
    //       title: 'Register step 2',
    //       isPublic: true,
    //       isLogin: true,
    //     },
    // },
    // {
    //     path:'/register-step-3',
    //     name: 'register-step-3',
    //     component: StepThree,
    //     meta: {
    //       title: 'Register step 3',
    //       isPublic: true,
    //       isLogin: true,
    //     },
    // },
    // {
    //     path:'/register-step-4',
    //     name: 'register-step-4',
    //     component: StepFour,
    //     meta: {
    //       title: 'Register step 4',
    //       isPublic: true,
    //       isLogin: true,
    //     },
    // },
    // {
    //     path:'/register-step-5-6-7',
    //     name: 'register-step-5-6-7',
    //     component: StepFiveSixSeven,
    //     meta: {
    //       title: 'Register step 5 6 7',
    //       isPublic: true,
    //       isLogin: true,
    //     },
    // },
    // {
    //     path:'/manual-input',
    //     name: 'manual-input',
    //     component: ManualInput,
    //     meta: {
    //       title: 'Manual Input',
    //       isPublic: true,
    //       isLogin: true,
    //     },
    // },
    // {
    //     path: '/',
    //     redirect: '/',
    //     name: 'Layout',
    //     component: Layout,
    //     children: [{
    //             path: '/',
    //             name: 'home',
    //             component: () => {
    //                 if (store.getters['authUser']) {
    //                   switch (store.getters['authUser'].role) {
    //                     case ROLE_STARTUP:
    //                       return import("@/pages/Home/List");
    //                     case ROLE_INVESTOR:
    //                       return import("@/pages/investor/home-investor");
    //                   }
    //                 }
    //             },
    //             meta: {
    //                 title: 'ホーム',
    //                 isPublic: true,
    //                 isLogin: true,
    //             },
    //         },
    //         {
    //             path: '/capital-policy',
    //             name: 'Capital Policy',
    //             component: CapitalPolicy,
    //             meta: {
    //                 title: '資本政策・ ラウンド追加',
    //                 isPublic: true,
    //                 isLogin: true,
    //             }
    //         },
    //         {
    //             path: '/edit-capital-policy',
    //             name: 'Edit Capital Policy',
    //             component: EditPolicy,
    //             meta: {
    //                 title: '資本政策の 編集・削除',
    //                 isPublic: true,
    //                 isLogin: true,
    //             }
    //         },
    //         {
    //             path: '/investment-list',
    //             name: 'Investment destination list',
    //             component: InvestmentList,
    //             meta: {
    //                 title: 'Investment destination list',
    //                 isPublic: true,
    //                 isLogin: true,
    //             }
    //         },
    //         {
    //             path: '/notice-list',
    //             name: 'Notice list',
    //             component: NoticeList,
    //             meta: {
    //                 title: 'Notice list',
    //                 isPublic: true,
    //                 isLogin: true,
    //             }
    //         },
    //         {
    //             path: '/notice-detail',
    //             name: 'Notice detail',
    //             component: NoticeDetail,
    //             meta: {
    //                 title: 'Notice detail',
    //                 isPublic: true,
    //                 isLogin: true
    //             }
    //         },
    //         {
    //             path:'/contact',
    //             name: 'contact',
    //             component: Contact,
    //             meta: {
    //               title: 'お問い合わせ',
    //               isPublic: true,
    //               isLogin: true,
    //             },
    //         },
    //         {
    //             path: '/simulation',
    //             name: 'Simulation',
    //             component: SimulationScreen,
    //             meta: {
    //                 title: 'シュミレーション',
    //                 isPublic: true,
    //                 isLogin: true,
    //             },
    //         },
    //         {
    //             path: '/simulation-list',
    //             name: 'Simulation List',
    //             component: SimulationList,
    //             meta: {
    //                 title: 'シュミレーション',
    //                 isPublic: true,
    //                 isLogin: true,
    //             }
    //         },
    //         {
    //             path: '/account-setting',
    //             name: 'Account Setting',
    //             component: AccountSetting,
    //             meta: {
    //                 title: 'アカウント設定',
    //                 isPublic: true,
    //                 isLogin: true
    //             }
    //         }
    //     ]
    // }
]