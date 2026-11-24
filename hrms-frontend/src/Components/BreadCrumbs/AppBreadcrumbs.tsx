import { Breadcrumbs, Typography } from '@mui/material';
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './breadcrumbs.css';
import type { FC } from 'react';
import type { IApplicationState } from '../../Store/state/app-state';
import { useSelector } from 'react-redux';
import { getFirstPermittedPath } from '../../Utils/commanFunctions';

interface BreadcrumbProps {
    routeSegments: { name: string; path?: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ routeSegments }) => {
    const permissions = useSelector(
        (state: IApplicationState) =>
            state.UserData?.permissions
    );

    const homePath = getFirstPermittedPath(permissions ?? []);
    // const customBreadcrumb = location.state?.breadcrumb;
    return (

        <Breadcrumbs
            key="breadcrumbs"
            separator={<FaChevronRight style={{ fontSize: 12 }} />}
            sx={{ display: 'flex', alignItems: 'center', position: 'relative', }
            }
        >
            <Link to={homePath || '/login'} >
                <FaHome style={{ fontSize: 24, color: '#024d81' }} />
            </Link>

            {
                routeSegments
                    // ? [...routeSegments, { name: customBreadcrumb, path: null }].map((route, index) => {
                    ? [...routeSegments].map((route, index) => {
                        return (
                            index !== routeSegments.length - 1 && route.path ? (
                                <Link key={index} to={route.path}>
                                    <Typography className='bread-crumbs-text'>{route.name}</Typography>
                                </Link>
                            ) : (
                                <Typography key={index} className='bread-crumbs-text'>{route.name}</Typography>
                            )
                        )
                    })
                    : null
            }
        </Breadcrumbs>

    );
};

export default Breadcrumb;
