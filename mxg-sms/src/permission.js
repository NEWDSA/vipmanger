/**
 * 權限校驗：
 * Vue Router 中的前置鈎子函數 beforeEach(to,from,next)
 * 當進行路由跳轉之前，進行判斷，是否已經登録過，登録則允許訪問非登録頁面,否則回到登録頁
 * to: 即將要進入到目標路由對象
 * from: 即將要離開的路由對象
 * next: 是一個路由方法，可以指定路由地址，進行路由跳轉
 */
import router from './router'
import { getUserInfo } from './api/login'
//路由前置
router.beforeEach((to, from, next) => {
    //1.獲取token
    const token = localStorage.getItem("luciano-msg-token")
    //1.1.如果沒有獲取到token,
    if (!token) {
        //要訪問非登陸頁面，則不讓訪問，回到登録頁面 /login
        if (to.path !== '/login') {
            next({ path: '/login' })
        } else {
            next();
        }
    } else {
        //1.2.如果獲取到token
        if (to.path === "/login") {
            //1.2.1 請求路由 /login，那就去目標路由
            next()
        } else {
            //1.2.2 請求路由非登陸頁面，先在本地查看是否有用戶信息,
            const userInfo = localStorage.getItem("luciano-msm-user");
            if (userInfo) {
                //本地獲取到，則直接讓它去目標路由
                next()
            } else {
                //如果本地沒有用戶信息，就通過token去獲取用戶信息
                getUserInfo(token).then(res => {
                    const resp = res.data
                    if (resp.flag) {
                        //如果獲取到用戶信息，則進入非登録頁面，否則沒有獲取到登録信息，則進入登録頁面
                        //保存到本地
                        localStorage.setItem("luciano-msm-user", JSON.stringify(resp.data));
                        next()
                    }else{
                        //未獲取到用戶信息，重新登録
                        next({path:'/login'})
                    }
                })
            }

        }

    }

}) 