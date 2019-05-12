/**
 * @author WMXPY
 * @namespace Init
 * @description Organization
 */

import { IOrganizationModel, OrganizationController } from "@brontosaurus/db";
import { ObjectID } from "bson";

export const prepareOrganization = async (): Promise<ObjectID> => {

    const testOrganization: IOrganizationModel = OrganizationController.createUnsavedOrganization('Test_Organization');

    await testOrganization.save();

    return testOrganization._id;
};
