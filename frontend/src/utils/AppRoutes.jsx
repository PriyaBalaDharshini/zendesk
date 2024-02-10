import Create from "../components/user/Create";
import Home from "../components/user/Home";

const AppRoutes = [
    {
        path: '/',
        element: <Home />
    }, {
        path: '/create',
        element: <Create />
    }
];

export default AppRoutes