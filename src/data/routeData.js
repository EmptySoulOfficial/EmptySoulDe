import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Impressum from "../pages/Impressum/Impressum";
import Privacy from "../pages/Privacy/Privacy";

export const routeitems = [
  
    {
        RouteType: 'Link',
        route: '/',
        component: Home
    },
    {
      RouteType: 'Link',
        route: '/AboutMe',
        component: AboutMe
    },
    {
      RouteType: 'Link',
        route: '/Impressum',
        component: Impressum
    },
    {
      RouteType: 'Link',
        route: '/Privacy',
        component: Privacy
    }
]
