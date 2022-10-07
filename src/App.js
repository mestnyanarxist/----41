import { Button } from "@mui/material";
import { DashboardLayout } from "./components/DashboardLayout/DashboardLayout";
import MainPage from "./module/MainPage/MainPage";
import NewsPage from "./module/NewsPage/NewsPage";

const Pages = {
    "/": <MainPage />,
    "news": <NewsPage />,
}

export function App() {

    const goToHome = () => {
        window.location.href = "/"
    }

    if (window.location.pathname === "/") {
        return <DashboardLayout>
            <a href="/news">Нвовости</a>
            <Button onClick={goToHome} variant="contained">Login</Button>
            {Pages[window.location.pathname]}
        </DashboardLayout>
    }

    return (

        <DashboardLayout>
            <a href="/news">Нвовости</a>
            <Button onClick={goToHome} variant="contained">Login</Button>
            {Pages[window.location.pathname]}
        </DashboardLayout>
    )
}