import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//懒加载：是一种独特而又强大的数据获取方法,
// 它能够在用户滚动页面的时候自动获取更多的数据,
// 而新得到的数据不会影响原有数据的显示,同时最大程度上减少服务器端的资源耗用
const LoginView=()=>import('../views/LoginView')
const ProfileView=()=>import('../views/ProfileView')
const YunCunView=()=>import('../views/YunCunView')
const VideoView=()=>import('../views/VideoView')
const SearchView=()=>import('../views/SearchView')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path:'/login',
  name:'login',
  component: LoginView},
  {path:'/profile',
    name:'profile',
    component: ProfileView},
  {path:'/yun-cun',
    name:'yunCun',
    component: YunCunView},
  {path:'/video',
    name:'video',
    component: VideoView},
  {path:'/search',
    name:'search',
    component: SearchView},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
