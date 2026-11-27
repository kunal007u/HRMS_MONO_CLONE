"use strict";

const ADMIN_ROLE_ID = "6e5f9a85-db29-4960-bba9-74a334fb3731";

// [New permission ID, existing route ID]
// Only the 35 additional routes are included.
const seedPermissions = [
  ["27d603ad-613d-4390-bb11-ee55e4905dd3", "c288905a-5bdc-493d-8524-567ae4dd72b5"],
  ["a0e73ee1-d7bc-4e26-b448-999c0b3557d6", "66ada215-c1ef-41e6-bf4c-5811ec22d7db"],
  ["428c1536-6794-4b89-990a-22e8a209b96b", "208f1be0-9653-4a76-9788-cc751f31f895"],
  ["d59871d7-9d85-415e-b153-c50b92240b42", "6b2ee0f4-ecc0-4cea-8cee-5dff58583cd2"],
  ["5a019edd-ddf8-48c3-b29f-f92b9b926dc2", "96d801eb-a2f0-44e6-8738-220d849abfa9"],
  ["2e843297-4904-4a7a-9d89-8d8a9399e59f", "e6d7ab08-5ab4-4ffe-97db-662c0746e6eb"],
  ["9522b4ef-a3d1-4465-ab1a-336dc54d5c65", "82e6e6e3-d763-4da6-a305-dcd2c5bb7909"],
  ["11fa99d7-87c2-4509-b511-7db60552bc08", "f737aa19-9106-46e0-a272-73306b7d1721"],
  ["ca35f51e-791b-4b92-90d1-a21519ec72e6", "b4f313f0-4a24-46ad-9644-615b552ed8af"],
  ["f797ba71-5c72-430e-94d9-1a6aa10950d6", "598e0d41-7ee6-41bc-96c5-d6262e745648"],
  ["9d295363-deaa-459d-a0b9-0ed5d6fe401e", "4cab10a0-6a49-4e9d-8ad1-2a5de57a913a"],
  ["730023e0-5652-4a29-9d72-8340b9d7cea8", "4ddf905c-0164-46eb-8827-f1832d4dc05c"],
  ["0ec2e6ee-4178-42d3-ae4f-048b5dc46a11", "4895217f-83dc-4c5a-a787-37c3bef0b047"],
  ["68e1ef48-95b4-47e0-9d7f-27d17843976d", "72e80249-1b16-4725-ae09-315b9ec39fd2"],
  ["ae1a69a1-5112-4a0b-8fe5-378a881d1113", "f02417f0-48f3-4928-a384-b55aaedd2c1e"],
  ["55af3eaa-b660-442e-834b-a851858de044", "ab661bb5-7276-4cd1-b111-ec8ae1ade8ca"],
  ["bca95e40-880d-469d-9e61-5bb61fa1fe20", "24c6c2e3-26ad-421b-9a07-5551c99c7569"],
  ["d02aa3f6-a1f1-4025-b5e3-815e2b5fcc8c", "baed1a95-467f-428f-bfce-d5a533bc0dcc"],
  ["d92b9052-18f9-472b-951f-bb269fe882ae", "4adc05a8-f4f2-4fb8-9979-31ba80d4745d"],
  ["1402a365-2f5c-4e4e-817a-ca3129670d92", "ef81b48c-feb0-40b0-98c2-7b33e1d6c7c8"],
  ["5b0aa4bd-f6d3-4369-b57f-1afbc12acd3c", "9acf536a-42b1-436d-8f96-1ade0d76cd0c"],
  ["ba2fb230-a1e9-4992-af4a-efa87b36d826", "36233df1-ebfe-4813-989a-eccdb58309bb"],
  ["fde51db2-3137-425f-829c-8cca0614020a", "b5b8782b-d079-4bab-b741-6dfb5ca1b64c"],
  ["90fc4722-0ec5-45f7-a268-ae310e590ac0", "e41e11c3-ba6d-4d13-b19e-bcf77023afcf"],
  ["4f92578b-f833-49f2-a64b-3533603a6a2a", "562f5713-1081-4b48-9efb-c781cc979754"],
  ["3850f9aa-7cc1-42b2-abf1-0df88ef360c9", "93fe53ec-ed35-4dcb-a079-3e027c99a6f7"],
  ["3f9ed628-82e6-4434-a1b3-4b016bb05c8d", "b1b22b71-d8bd-449d-a57e-3aded15cc2a1"],
  ["f3517135-b17b-4598-919e-e980d89427ca", "536b01fb-1f0d-437a-ac0c-4ce4c9e95fe8"],
  ["7036d2d7-180e-48d1-afc6-3009b63c0be0", "62c1c89f-0e35-4d3a-87ec-bc726d0fa817"],
  ["49b64eee-9cf9-40e6-b65b-c524156700c3", "73117383-f086-416c-9139-2b7d9ee324ee"],
  ["d3da7b16-bd5e-4db9-8269-ba43f624066f", "e69600c1-b540-4ca5-8cc1-1a7574edcd64"],
  ["8b7ec28b-443f-4130-86e0-c20a7ab6acaa", "d7024db4-f314-4d9f-8b31-437b55dbe9c0"],
  ["dcaa66be-c855-4d71-8619-22908fcffc07", "2d49c229-0e9a-488d-916a-b4ea73757fdd"],
  ["902a2b12-18bf-4ee1-8cb4-b134a9d48ba1", "f7b70483-3c83-4880-a89c-db5a524803d4"],
  ["bb056888-a898-445f-bd78-f60f8120aad1", "cfa03ce3-bfb6-4c53-9e2e-08b43fe5a3cc"],
].map(([id, routeId]) => ({
  id,
  routeId,
  roleId: ADMIN_ROLE_ID,
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(
      async (transaction) => {
        // Find permissions already assigned to this role.
        const existingPermissions = await queryInterface.select(
          null,
          "permissions",
          {
            attributes: ["routeId"],
            where: {
              roleId: ADMIN_ROLE_ID,
              routeId: {
                [Sequelize.Op.in]: seedPermissions.map(
                  (permission) => permission.routeId
                ),
              },
            },
            transaction,
          }
        );

        const existingRouteIds = new Set(
          existingPermissions.map(
            (permission) => permission.routeId
          )
        );

        // Keep only role–route pairs that do not exist.
        const missingPermissions = seedPermissions.filter(
          (permission) =>
            !existingRouteIds.has(permission.routeId)
        );

        if (missingPermissions.length === 0) {
          return;
        }

        await queryInterface.bulkInsert(
          "permissions",
          missingPermissions.map((permission) => ({
            ...permission,
            canCreate: true,
            canRead: true,
            canUpdate: true,
            canDelete: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          })),
          { transaction }
        );
      }
    );
  },

  async down(queryInterface, Sequelize) {
    // Delete only permission IDs owned by this seeder.
    await queryInterface.bulkDelete("permissions", {
      roleId: ADMIN_ROLE_ID,
      id: {
        [Sequelize.Op.in]: seedPermissions.map(
          (permission) => permission.id
        ),
      },
    });
  },
};