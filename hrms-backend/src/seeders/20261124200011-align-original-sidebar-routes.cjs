"use strict";

const GROUP = {
  employee: "0a8ee2b1-4534-4fd8-a99d-e63116b3a257",
  projects: "c288905a-5bdc-493d-8524-567ae4dd72b5",
  hr: "66ada215-c1ef-41e6-bf4c-5811ec22d7db",
  inventory: "208f1be0-9653-4a76-9788-cc751f31f895",
  reports: "6b2ee0f4-ecc0-4cea-8cee-5dff58583cd2",
  performance: "96d801eb-a2f0-44e6-8738-220d849abfa9",
  assessment: "e6d7ab08-5ab4-4ffe-97db-662c0746e6eb",
};

// Builds one route record without repeating these property names.
const makeRoute = (id, name, path, parentRouteId, priority) => ({
  id,
  name,
  path,
  parentRouteId,
  childRouteId: null,
  priority,
});

const routes = [
  // Dashboards
  makeRoute(
    "30197083-e969-4797-8e27-2a44d97c380a",
    "Admin Dashboard",
    "/admin/dashboard/admin-dashboard",
    null,
    1
  ),
  makeRoute(
    "82e6e6e3-d763-4da6-a305-dcd2c5bb7909",
    "Employee Dashboard",
    "/admin/dashboard/employee-dashboard",
    null,
    2
  ),

  // Employee
  makeRoute(GROUP.employee, "Employee", null, null, 3),
  makeRoute(
    "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b",
    "Personal Details",
    "/admin/employee/personal-details",
    GROUP.employee,
    1
  ),
  makeRoute(
    "79e0a2c0-35f6-4ac0-a600-520cf7f5530d",
    "All Employees",
    "/admin/employee/all-employees",
    GROUP.employee,
    2
  ),
  makeRoute(
    "f737aa19-9106-46e0-a272-73306b7d1721",
    "Attendance",
    "/admin/employee/attendance",
    GROUP.employee,
    3
  ),
  makeRoute(
    "b4f313f0-4a24-46ad-9644-615b552ed8af",
    "My Leaves",
    "/admin/employee/leaves/my-leaves",
    GROUP.employee,
    4
  ),
  makeRoute(
    "598e0d41-7ee6-41bc-96c5-d6262e745648",
    "Pay Slip",
    "/admin/employee/payroll/payslip",
    GROUP.employee,
    5
  ),
  makeRoute(
    "4cab10a0-6a49-4e9d-8ad1-2a5de57a913a",
    "Work Log",
    "/admin/employee/work-log",
    GROUP.employee,
    6
  ),
  makeRoute(
    "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9",
    "Holidays",
    "/admin/employee/holidays",
    GROUP.employee,
    7
  ),
  makeRoute(
    "4ddf905c-0164-46eb-8827-f1832d4dc05c",
    "Resignation",
    "/admin/employee/employee-resignation",
    GROUP.employee,
    8
  ),

  // Projects
  makeRoute(GROUP.projects, "Projects", null, null, 4),
  makeRoute(
    "4895217f-83dc-4c5a-a787-37c3bef0b047",
    "All Projects",
    "/admin/projects/all-projects",
    GROUP.projects,
    1
  ),
  makeRoute(
    "72e80249-1b16-4725-ae09-315b9ec39fd2",
    "Tasks",
    "/admin/projects/tasks",
    GROUP.projects,
    2
  ),
  makeRoute(
    "f02417f0-48f3-4928-a384-b55aaedd2c1e",
    "Project Statistics",
    "/admin/projects/project-statistics",
    GROUP.projects,
    3
  ),

  // HR / Admin
  makeRoute(GROUP.hr, "HR/Admin", null, null, 5),
  makeRoute(
    "ab661bb5-7276-4cd1-b111-ec8ae1ade8ca",
    "Policies",
    "/admin/hr/policies/all-policies",
    GROUP.hr,
    1
  ),

  // Inventory and its children
  makeRoute(GROUP.inventory, "Inventory", null, GROUP.hr, 2),
  makeRoute(
    "24c6c2e3-26ad-421b-9a07-5551c99c7569",
    "Office Assets",
    "/admin/hr/inventory/office-assetes",
    GROUP.inventory,
    1
  ),
  makeRoute(
    "baed1a95-467f-428f-bfce-d5a533bc0dcc",
    "Kitchen",
    "/admin/hr/inventory/kitchen-assetes",
    GROUP.inventory,
    2
  ),

  // Reports and their children
  makeRoute(GROUP.reports, "Reports", null, GROUP.hr, 3),
  makeRoute(
    "4adc05a8-f4f2-4fb8-9979-31ba80d4745d",
    "Attendance Report",
    "/admin/hr/reports/attendance-report",
    GROUP.reports,
    1
  ),
  makeRoute(
    "ef81b48c-feb0-40b0-98c2-7b33e1d6c7c8",
    "Leave Report",
    "/admin/hr/reports/leave-report",
    GROUP.reports,
    2
  ),
  makeRoute(
    "9acf536a-42b1-436d-8f96-1ade0d76cd0c",
    "Work Report",
    "/admin/hr/reports/work-report",
    GROUP.reports,
    3
  ),

  // Other HR pages
  makeRoute(
    "36233df1-ebfe-4813-989a-eccdb58309bb",
    "Resignation",
    "/admin/hr/resignationHR",
    GROUP.hr,
    4
  ),
  makeRoute(
    "b5b8782b-d079-4bab-b741-6dfb5ca1b64c",
    "All Worklogs",
    "/admin/hr/workLogs",
    GROUP.hr,
    5
  ),
  makeRoute(
    "e41e11c3-ba6d-4d13-b19e-bcf77023afcf",
    "Announcements",
    "/admin/hr/annoncements",
    GROUP.hr,
    6
  ),
  makeRoute(
    "562f5713-1081-4b48-9efb-c781cc979754",
    "Employee Salary Master",
    "/admin/hr/payroll/employee-salary",
    GROUP.hr,
    7
  ),
  makeRoute(
    "93fe53ec-ed35-4dcb-a079-3e027c99a6f7",
    "Route Permission",
    "/admin/hr/roles/all-roles",
    GROUP.hr,
    8
  ),
  makeRoute(
    "b1b22b71-d8bd-449d-a57e-3aded15cc2a1",
    "All Attendance",
    "/admin/hr/attendance/all-attendance",
    GROUP.hr,
    9
  ),
  makeRoute(
    "536b01fb-1f0d-437a-ac0c-4ce4c9e95fe8",
    "All Leaves",
    "/admin/hr/leave/all-leaves",
    GROUP.hr,
    10
  ),
  makeRoute(
    "62c1c89f-0e35-4d3a-87ec-bc726d0fa817",
    "Leave Master",
    "/admin/hr/leave/leave-master",
    GROUP.hr,
    11
  ),
  makeRoute(
    "73117383-f086-416c-9139-2b7d9ee324ee",
    "Leave Balance",
    "/admin/hr/leave/leave-balance",
    GROUP.hr,
    12
  ),
  makeRoute(
    "e69600c1-b540-4ca5-8cc1-1a7574edcd64",
    "Monthly Salary",
    "/admin/hr/payroll/monthly-salary",
    GROUP.hr,
    13
  ),

  // Performance
  makeRoute(GROUP.performance, "Performance", null, null, 6),
  makeRoute(
    "d7024db4-f314-4d9f-8b31-437b55dbe9c0",
    "Reviews",
    "/admin/performance/reviews",
    GROUP.performance,
    1
  ),

  // Assessment and its children
  makeRoute(
    GROUP.assessment,
    "Assessment",
    null,
    GROUP.performance,
    2
  ),
  makeRoute(
    "2d49c229-0e9a-488d-916a-b4ea73757fdd",
    "Employee Assessment",
    "/admin/performance/assessment/employee-assessment",
    GROUP.assessment,
    1
  ),
  makeRoute(
    "f7b70483-3c83-4880-a89c-db5a524803d4",
    "Admin Assessment",
    "/admin/performance/assessment/admin-assessment",
    GROUP.assessment,
    2
  ),
  makeRoute(
    "cfa03ce3-bfb6-4c53-9e2e-08b43fe5a3cc",
    "Goals",
    "/admin/performance/goals",
    GROUP.performance,
    3
  ),
];

// The five routes that existed before this seeder.
// Used by down() to restore their previous paths and ordering.
const previousRoutes = [
  {
    id: "30197083-e969-4797-8e27-2a44d97c380a",
    path: "/admin-dashboard",
    parentRouteId: null,
    priority: 1,
  },
  {
    id: GROUP.employee,
    path: null,
    parentRouteId: null,
    priority: 2,
  },
  {
    id: "79e0a2c0-35f6-4ac0-a600-520cf7f5530d",
    path: "/employees",
    parentRouteId: GROUP.employee,
    priority: 1,
  },
  {
    id: "2ee0fb3e-41e4-4da3-97a5-6a8b5b3ece1b",
    path: "/personal-details",
    parentRouteId: GROUP.employee,
    priority: 2,
  },
  {
    id: "f9ed0f73-4392-4de2-9e6b-d67dc2a8b6e9",
    path: "/holidays",
    parentRouteId: null,
    priority: 3,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(
      async (transaction) => {
        const existingRoutes = await queryInterface.select(
          null,
          "routes",
          {
            attributes: ["id"],
            where: {
              id: {
                [Sequelize.Op.in]: routes.map(
                  (route) => route.id
                ),
              },
            },
            transaction,
          }
        );

        const existingIds = new Set(
          existingRoutes.map((route) => route.id)
        );

        for (const route of routes) {
          if (existingIds.has(route.id)) {
            await queryInterface.bulkUpdate(
              "routes",
              {
                ...route,
                updatedAt: new Date(),
              },
              { id: route.id },
              { transaction }
            );
          } else {
            await queryInterface.bulkInsert(
              "routes",
              [
                {
                  ...route,
                  isActive: true,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ],
              { transaction }
            );
          }
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(
      async (transaction) => {
        const previousIds = new Set(
          previousRoutes.map((route) => route.id)
        );

        // Remove new routes, children before parents.
        for (const route of [...routes].reverse()) {
          if (!previousIds.has(route.id)) {
            await queryInterface.bulkDelete(
              "routes",
              { id: route.id },
              { transaction }
            );
          }
        }

        // Restore the original five instead of deleting them.
        for (const route of previousRoutes) {
          await queryInterface.bulkUpdate(
            "routes",
            {
              ...route,
              childRouteId: null,
              updatedAt: new Date(),
            },
            { id: route.id },
            { transaction }
          );
        }
      }
    );
  },
};