/**
 * @author WMXPY
 * @namespace Init
 * @description Account
 */

import { AccountController } from "@brontosaurus/db";
import { unique } from "@sudoo/bark/random";
import { PreparedGroup } from "./group";

export const prepareAccount = async (groups: PreparedGroup) => {

    const adminUser = AccountController.createUnsavedAccount(
        'admin',
        'admin',
        'Admin User',
        'admin@example.com',
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

    const ghostUser = AccountController.createUnsavedAccount(
        'ghost',
        unique(new Date(), 32),
        'Ghost User',
        'ghost@example.com',
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
    await ghostUser.save();
};
