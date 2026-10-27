
import { memo } from "react";
import { Outlet } from "react-router";

const PublicLayout = memo(() => {
    return <Outlet />;
});

export default PublicLayout;
