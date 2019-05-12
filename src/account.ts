/**
 * @author WMXPY
 * @namespace Init
 * @description Account
 */

import { AccountController } from "@brontosaurus/db";
import { ObjectID } from "bson";
import { PreparedGroup } from "./group";

export const prepareAccount = async (groups: PreparedGroup, testOrganization: ObjectID) => {

    const adminUser = AccountController.createUnsavedAccount(
        'admin',
        'admin',
        undefined,
        [
            groups.adminGroupId,
            groups.selfControlGroupId,
        ],
        {},
        {
            tag: "Default",
        },
    );

    const testUser = AccountController.createUnsavedAccount(
        'test',
        'test',
        testOrganization,
        [
            groups.organizationControlGroupId,
            groups.selfControlGroupId,
        ],
        {},
        {
            tag: "Default",
        },
    );

    await adminUser.save();
    await testUser.save();
};
