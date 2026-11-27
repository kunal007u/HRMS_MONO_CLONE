const PATH_PREFIX = "/admin";

export const Routing = {
    Login: "/login",

    AdminDashboard:
        `${PATH_PREFIX}/dashboard/admin-dashboard`,

    EmployeeDashboard:
        `${PATH_PREFIX}/dashboard/employee-dashboard`,

    AllEmployee:
        `${PATH_PREFIX}/employee/all-employees`,

    PersonalDetails:
        `${PATH_PREFIX}/employee/personal-details`,

    SingleEmployee:
        `${PATH_PREFIX}/employee/all-employees/:id`,

    Holidays:
        `${PATH_PREFIX}/employee/holidays`,
};