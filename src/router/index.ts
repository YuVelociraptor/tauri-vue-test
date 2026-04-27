import {createRouter, createWebHashHistory} from 'vue-router'

// ページコンポーネント
import Home from '@/pages/Home.vue'
import Settings from "@/pages/Settings.vue";
import Menu01 from "@/pages/Menu01.vue";
import Menu02 from "@/pages/Menu02.vue";

// ルート定義
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/menu01',
        name: 'Menu01',
        component: Menu01
    },
    {
        path: '/menu02',
        name: 'Menu02',
        component: Menu02
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    }
]

// Router生成
const router = createRouter({
    // ★TauriではHashが安定
    history: createWebHashHistory(),
    routes,
})

export default router