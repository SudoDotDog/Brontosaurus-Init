/**
 * @author WMXPY
 * @namespace Init
 * @description Panic
 */

import { Panic } from 'connor';

export const MODULE_NAME = 'Brontosaurus-Init';

export enum ERROR_CODE {

    DATABASE_LINK_NOT_ASSIGNED = 1005,
}

export const ERROR_LIST: Record<ERROR_CODE, string> = {

    [ERROR_CODE.DATABASE_LINK_NOT_ASSIGNED]: 'Database link environment not assigned',
};

export const panic: Panic<ERROR_CODE> = Panic.withDictionary(MODULE_NAME, ERROR_LIST);
