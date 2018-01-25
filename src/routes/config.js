import Index from './file/index';
import Login from './file/login';
import Register from './file/register';
import Home from './file/home';
import Mine from './file/mine';
import More from './file/more';

export default {
    routes: [
        {
            path: '/index',
            component: Index,
            children: [
                {
                    path: '/home',
                    component: Home
                },
                {
                    path: '/mine',
                    component: Mine
                },
                {
                    path: '/more',
                    component: More
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ],
    defaultPath: '/login'
}