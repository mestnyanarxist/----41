import { Button } from "@mui/material"
import { AUTH_PAGE_PATHNAME } from "../../constants/urls";

function isAuthPage() {
    return window.location.pathname === AUTH_PAGE_PATHNAME;
}

export const Profile = () => {

    function handleClick() {
        if (isAuthPage()) {
            window.history.back();
        } else {
            window.location.href = AUTH_PAGE_PATHNAME
        }
    }

    function getButtonName() {
        if (isAuthPage()) {
            return "Back"
        } else {
            return "Login"
        }
    }

    return <Button onClick={handleClick} class='Login' color="inherit">sadsd</Button>
}