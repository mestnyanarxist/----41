import { DashboardLayout } from "./components/DashboardLayout/DashboardLayout";
import MainPage from "./module/MainPage/MainPage";
import AuthPage from "./module/AuthPage/AuthPage";
import { AUTH_PAGE_PATHNAME } from "./constants/urls";
import { Profile } from "./containers/Profile/Profile";

const Pages = {
    "/": <MainPage />,
    [AUTH_PAGE_PATHNAME]: <AuthPage />,
}



export function App() {

    const headerParams = {
        children: <Profile />
    }

    return (
        <DashboardLayout header={headerParams}>
            {Pages[window.location.pathname]}
        </DashboardLayout>
    )

}