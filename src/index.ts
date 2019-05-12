/**
 * @author WMXPY
 * @namespace Init
 * @description Index
 */

import { connect } from "@brontosaurus/db";
import { Connection } from "mongoose";
import { ERROR_CODE, panic } from "./panic";

const database: string | undefined = process.env.BRONTOSAURUS_DB || process.env.BRONTOSAURUS_DATABASE;

if (!database) {

    throw panic.code(ERROR_CODE.DATABASE_LINK_NOT_ASSIGNED);
}

const db: Connection = connect(database);
db.on('error', console.log.bind(console, 'connection error:'));
