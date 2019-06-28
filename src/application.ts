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
        3600000,
        INTERNAL_APPLICATION.RED + Math.random().toString(),
        {},
    );

    await redApplication.save();
};
