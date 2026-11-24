import { useState } from "react";
import { Collapse } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import type { IPermissionRoute } from "../../Model/permission/permissionM";
import { hasActiveRoute } from "../../Utils/commanFunctions";

interface SidebarItemProps {
    item: IPermissionRoute;
    depth?: number;
}



const SidebarItem = ({ item, depth = 0 }: SidebarItemProps) => {
    const storageKey = `hrms-sidebar-open-${item.id}`;

    const [isOpen, setIsOpen] = useState(() => {
        try {
            const saved = localStorage.getItem(storageKey);

            if (saved === "true") return true;
            if (saved === "false") return false;
        } catch {
            // Use the default if storage is unavailable.
        }

        return true;
    });

    const toggleMenu = () => {
        const nextIsOpen = !isOpen;

        setIsOpen(nextIsOpen);

        try {
            localStorage.setItem(storageKey, String(nextIsOpen));
        } catch {
            // The toggle still works without persistence.
        }
    };

    const { pathname } = useLocation();

    const isActive = hasActiveRoute(item, pathname);
    const hasChildren = item.childRoute.length > 0;

    const linkClass =
        depth === 0
            ? "sidebar-main-menu-link"
            : "child-menu-list sidebar-link";

    const content = (
        <div className="sidebar-link-item">
            <span className="sidebar-list-item-text">
                {item.name}
            </span>
        </div>
    );

    return (
        <>
            {item.path ? (
                <NavLink
                    to={item.path}
                    end
                    className={({ isActive: isLinkActive }) =>
                        `${isLinkActive ? "active " : ""}${linkClass}`
                    }
                >
                    {content}
                </NavLink>
            ) : (
                <button
                    type="button"
                    className={`sidebar-menu-item ${isActive ? "active" : ""
                        } ${isOpen ? "sidebar-link-active-open" : ""
                        }`}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    style={{
                        border: 0,
                        background: "transparent",
                        font: "inherit",
                        textAlign: "left",
                    }}
                >
                    {content}

                    {hasChildren && (
                        <span className="sidebar-list-item-down-icon">
                            {isOpen ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </span>
                    )}
                </button>
            )}

            {hasChildren && (
                <Collapse
                    in={isOpen}
                    timeout="auto"
                    className={
                        depth === 0
                            ? `sidebar-collapse ${isOpen ? "child-open" : ""
                            }`
                            : "subchild-sidebar-collapse"
                    }
                >
                    {item.childRoute.map((child) => (
                        <SidebarItem
                            key={child.id}
                            item={child}
                            depth={depth + 1}
                        />
                    ))}
                </Collapse>
            )}
        </>
    );
};

export default SidebarItem;