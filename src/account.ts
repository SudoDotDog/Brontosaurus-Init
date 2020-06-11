/**
 * @author WMXPY
 * @namespace Init
 * @description Account
 */

import { AccountController } from "@brontosaurus/db";
import { unique } from "@sudoo/bark/random";
import { PreparedGroup } from "./group";
import { PreparedNamespace } from "./namespace";

export const prepareAccount = async (groups: PreparedGroup, namespaces: PreparedNamespace): Promise<void> => {

    const adminUser = AccountController.createUnsavedAccount(
        'admin',
        'admin',
        namespaces.adminNamespaceId,
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
        namespaces.defaultNamespaceId,
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
