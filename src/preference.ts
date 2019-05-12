/**
 * @author WMXPY
 * @namespace Init
 * @description Preference
 */

import { PreferenceController } from "@brontosaurus/db";

export const preparePreference = async () => {

    await PreferenceController.setSinglePreference('prepared', true);
    await PreferenceController.addMultiplePreference('registerInfo', {
        name: 'Email',
        type: 'string',
    });
    await PreferenceController.addMultiplePreference('registerInfo', {
        name: 'Phone',
        type: 'number',
    });
};