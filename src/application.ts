/**
 * @author WMXPY
 * @namespace Init
 * @description Application
 */

import { ApplicationController, INTERNAL_APPLICATION } from "@brontosaurus/db";

export const prepareAccount = async () => {

    const redApplication = ApplicationController.createUnsavedApplication(INTERNAL_APPLICATION.RED, INTERNAL_APPLICATION.RED, 3600000, INTERNAL_APPLICATION.RED);

    await redApplication.save();
};
