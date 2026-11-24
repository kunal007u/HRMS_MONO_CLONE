import { useSelector } from "react-redux";
import type { IApplicationState } from "../../Store/state/app-state";
import "./sidebar.css"
import { List } from "@mui/material";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
    const permissions = useSelector(
        (state: IApplicationState) =>
            state.UserData?.permissions ?? []
    );

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <span className="sidebar-logo">HRMS</span>
            </div>

            <nav aria-label="Main navigation">
                <List className="sidebar-container">
                    {permissions.map((item) => (
                        <SidebarItem key={item.id} item={item} />
                    ))}
                </List>
            </nav>

            {permissions.length === 0 && (
                <p>No navigation available.</p>
            )}
        </aside>
    );
};

export default Sidebar;