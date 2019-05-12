/**
 * @author WMXPY
 * @namespace Init
 * @description Group
 */

import { GroupController, INTERNAL_USER_GROUP } from "@brontosaurus/db";

export const prepareGroup = async () => {

    const adminGroup = GroupController.createUnsavedGroup(INTERNAL_USER_GROUP.SUPER_ADMIN);
    const selfControlGroup = GroupController.createUnsavedGroup(INTERNAL_USER_GROUP.SELF_CONTROL);
    const organizationControlGroup = GroupController.createUnsavedGroup(INTERNAL_USER_GROUP.ORGANIZATION_CONTROL);

    await adminGroup.save();
    await selfControlGroup.save();
    await organizationControlGroup.save();
};
