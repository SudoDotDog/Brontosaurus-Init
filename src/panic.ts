/**
 * @author WMXPY
 * @namespace Init
 * @description Panic
 */

import { Panic } from 'connor';

export const MODULE_NAME = 'Brontosaurus-Init';

export enum ERROR_CODE {

}

export const ERROR_LIST: Record<ERROR_CODE, string> = {

};

export const panic: Panic<ERROR_CODE> = Panic.withDictionary(MODULE_NAME, ERROR_LIST);
