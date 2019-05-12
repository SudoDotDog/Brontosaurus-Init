/**
 * @author WMXPY
 * @namespace Init
 * @description Group
 */

import { GroupController, IGroupModel, INTERNAL_USER_GROUP } from "@brontosaurus/db";
import { ObjectID } from "bson";

export type PreparedGroup = {
    readonly adminGroupId: ObjectID;
    readonly selfControlGroupId: ObjectID;
    readonly organizationControlGroupId: ObjectID;
};

export const prepareGroup = async (): Promise<PreparedGroup> => {

    const adminGroup: IGroupModel = GroupController.createUnsavedGroup(INTERNAL_USER_GROUP.SUPER_ADMIN);
    const selfControlGroup: IGroupModel = GroupController.createUnsavedGroup(INTERNAL_USER_GROUP.SELF_CONTROL);
    const organizationControlGroup: IGroupModel = GroupController.createUnsavedGroup(INTERNAL_USER_GROUP.ORGANIZATION_CONTROL);

    await adminGroup.save();
    await selfControlGroup.save();
    await organizationControlGroup.save();

    return {
        adminGroupId: adminGroup._id,
        selfControlGroupId: selfControlGroup._id,
        organizationControlGroupId: organizationControlGroup._id,
    };
};
