/**
 * @author WMXPY
 * @namespace Init
 * @description Index
 */

import { connect } from "@brontosaurus/db";
import { LOG_LEVEL, SudooLog } from "@sudoo/log";
import { ObjectID } from "bson";
import { Connection } from "mongoose";
import { prepareAccount } from "./account";
import { prepareApplication } from "./application";
import { PreparedGroup, prepareGroup } from "./group";
import { prepareOrganization } from "./organization";
import { ERROR_CODE, panic } from "./panic";
import { checkPrepared, preparePreference } from "./preference";

const database: string | undefined = process.env.BRONTOSAURUS_DB || process.env.BRONTOSAURUS_DATABASE;

if (!database) {

    throw panic.code(ERROR_CODE.DATABASE_LINK_NOT_ASSIGNED);
}

const db: Connection = connect(database);
db.on('error', console.log.bind(console, 'connection error:'));

const log = SudooLog.create(LOG_LEVEL.DEBUG);

(async (): Promise<void> => {

    try {

        const isPrepared: boolean = await checkPrepared();

        if (isPrepared) {
            throw panic.code(ERROR_CODE.ALREADY_PREPARED);
        }

        log.info('Preference');
        await preparePreference();

        log.info('Application');
        await prepareApplication();

        log.info('Group');
        const groups: PreparedGroup = await prepareGroup();

        log.info('Organization');
        const organization: ObjectID = await prepareOrganization();

        log.info('Account');
        await prepareAccount(groups, organization);

        log.info('Succeed');
    } catch (err) {

        log.error(err);
        log.critical('Failed');
    } finally {

        await db.close();
        log.info('Database Closed');
    }
})();
