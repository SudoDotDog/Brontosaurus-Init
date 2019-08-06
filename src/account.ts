/**
 * @author WMXPY
 * @namespace Init
 * @description Account
 */

import { AccountController } from "@brontosaurus/db";
import { PreparedGroup } from "./group";

export const prepareAccount = async (groups: PreparedGroup) => {

    const adminUser = AccountController.createUnsavedAccount(
        'admin',
        'admin',
        'Display',
        'admin@email.com',
        '123456789',
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
