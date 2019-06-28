/**
 * @author WMXPY
 * @namespace Init
 * @description Account
 */

import { AccountController } from "@brontosaurus/db";
import { ObjectID } from "bson";
import { PreparedGroup } from "./group";

export const prepareAccount = async (groups: PreparedGroup) => {

    const adminUser = AccountController.createUnsavedAccount(
        'admin',
        'admin',
        'email@email.com',
        '1234567890',
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

    await adminUser.save();
};
