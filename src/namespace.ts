/**
 * @author WMXPY
 * @namespace Init
 * @description Namespace
 */

import { INamespaceModel } from "@brontosaurus/db";
import { getBrontosaurusAdminNamespace, getBrontosaurusDefaultNamespace } from "@brontosaurus/db/controller/namespace";
import { ObjectID } from "bson";

export type PreparedNamespace = {
    readonly defaultNamespaceId: ObjectID;
    readonly adminNamespaceId: ObjectID;
};

export const prepareNamespace = async (): Promise<PreparedNamespace> => {

    const defaultNamespace: INamespaceModel = await getBrontosaurusDefaultNamespace();
    const adminNamespace: INamespaceModel = await getBrontosaurusAdminNamespace();

    return {
        defaultNamespaceId: defaultNamespace._id,
        adminNamespaceId: adminNamespace._id,
    };
};
