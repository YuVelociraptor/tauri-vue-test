import {createRouter, createWebHashHistory} from 'vue-router'

// ページコンポーネント
import Home from '@/pages/Home.vue'
import Settings from "@/pages/Settings.vue";

// ルート定義
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
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