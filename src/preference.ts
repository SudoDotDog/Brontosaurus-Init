/**
 * @author WMXPY
 * @namespace Init
 * @description Preference
 */

import { PreferenceController } from "@brontosaurus/db";

export const preparePreference = async (): Promise<void> => {

    await PreferenceController.setSinglePreference('prepared', true);
};

export const checkPrepared = async (): Promise<boolean> => {

    const isPrepared: boolean | null = await PreferenceController.getSinglePreference('prepared');

    return Boolean(isPrepared);
};
