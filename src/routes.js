import AppHome from '@/components/AppHome';
const AppMedium = () => import('@/components/AppMedium');
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EnterScreen from './components/EnterScreen';
import Main from './components/Main';


const routes = [
    {
        path: '/main',
        name: 'Main',
        component: Main,
        props: true
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: SignIn
    },
     {
        path: '/signUp',
        name: 'signUp',
        component: SignUp
    },
     {
        path: '/',
        name: 'enterScreen',
        component: EnterScreen
    },

];

export default routes;
