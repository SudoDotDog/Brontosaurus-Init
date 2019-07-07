/**
 * @author WMXPY
 * @namespace Polyfills
 * @description Fix Anchor
 */

import { connect } from "@brontosaurus/db";
import { LOG_LEVEL, SudooLog } from "@sudoo/log";
import { Connection } from "mongoose";
import { ERROR_CODE, panic } from "../panic";

const database: string | undefined = process.env.BRONTOSAURUS_DB || process.env.BRONTOSAURUS_DATABASE;

if (!database) {

    throw panic.code(ERROR_CODE.DATABASE_LINK_NOT_ASSIGNED);
}

const db: Connection = connect(database);
db.on('error', console.log.bind(console, 'connection error:'));

const log: SudooLog = SudooLog.create(LOG_LEVEL.DEBUG);

(async (): Promise<void> => {

    try {

        // Start Here
    } catch (err) {

        log.error(err);
        log.critical('Failed');
    } finally {

        await db.close();
        log.info('Database Closed');
    }
})();
