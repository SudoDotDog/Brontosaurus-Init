/**
 * @author WMXPY
 * @namespace Init
 * @description Application
 */

import { ApplicationController, IApplicationModel, INTERNAL_APPLICATION } from "@brontosaurus/db";

export const prepareApplication = async () => {

    const redApplication: IApplicationModel = ApplicationController.createUnsavedApplication(
        INTERNAL_APPLICATION.RED,
        INTERNAL_APPLICATION.RED,
        36000000,
        {},
    );

    redApplication.refreshGreen();
    redApplication.portalAccess = true;

    await redApplication.save();
};
