/**
 * @author WMXPY
 * @namespace Init
 * @description Namespace
 */

import { INamespaceModel, NamespaceController } from "@brontosaurus/db";
import { ObjectID } from "bson";

export type PreparedNamespace = {
    readonly defaultNamespaceId: ObjectID;
    readonly adminNamespaceId: ObjectID;
};

export const prepareNamespace = async (): Promise<PreparedNamespace> => {

    const defaultNamespace: INamespaceModel = await NamespaceController.getBrontosaurusDefaultNamespace();
    const adminNamespace: INamespaceModel = await NamespaceController.getBrontosaurusAdminNamespace();

    return {
        defaultNamespaceId: defaultNamespace._id,
        adminNamespaceId: adminNamespace._id,
    };
};
