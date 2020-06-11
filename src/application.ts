/**
 * @author WMXPY
 * @namespace Init
 * @description Application
 */

import { ApplicationController, IApplicationModel, INTERNAL_APPLICATION } from "@brontosaurus/db";
import { TIME_IN_MILLISECONDS } from "@sudoo/magic";

export const prepareApplication = async (): Promise<void> => {

    const redApplication: IApplicationModel = ApplicationController.createUnsavedApplication(
        INTERNAL_APPLICATION.RED,
        INTERNAL_APPLICATION.RED,
        TIME_IN_MILLISECONDS.WEEK,
        {},
    );

    redApplication.refreshGreen();
    redApplication.portalAccess = true;

    await redApplication.save();
};
