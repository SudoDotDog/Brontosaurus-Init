/**
 * @author WMXPY
 * @namespace Init
 * @description Preference
 */

import { PreferenceController } from "@brontosaurus/db";

export const preparePreference = async () => {

    await PreferenceController.setSinglePreference('prepared', true);
};

export const checkPrepared = async (): Promise<boolean> => {

    const isPrepared: boolean | null = await PreferenceController.getSinglePreference('prepared');

    return Boolean(isPrepared);
};
