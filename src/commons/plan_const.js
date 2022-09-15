const plan_navbar = [
    {
        router: 'home',
        class: 'm__right--8',
        text : 'ホーム'
    },
    {
        router: 'Capital Policy',
        class: 'm__right--8',
        text : '資本政策'
    },
    {
        router: 'investing',
        class: 'm__right--8',
        text : '資金調達'
    },
    {
        router: 'Simulation',
        class: 'm__right--24',
        text : 'M&A'
    },
]

const investor_navbar = [
    {
        router: 'home',
        class: 'm__right--8',
        text : 'ホーム'
    },
    {
        router: 'Investment destination list',
        class: 'm__right--8',
        text : '投資先一覧'
    },
]

const ROLE_STARTUP = 1
const ROLE_INVESTOR = 2

export {
    plan_navbar,
    investor_navbar,
    ROLE_INVESTOR,
    ROLE_STARTUP
};