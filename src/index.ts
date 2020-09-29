/**
 * @author WMXPY
 * @namespace Init
 * @description Index
 */

import { initDatabase } from "./init";
import { ERROR_CODE, panic } from "./panic";

const database: string | undefined = process.env.BRONTOSAURUS_DB || process.env.BRONTOSAURUS_DATABASE;

if (!database) {

    throw panic.code(ERROR_CODE.DATABASE_LINK_NOT_ASSIGNED);
}

initDatabase(database);
