/**
 * @author WMXPY
 * @namespace Init
 * @description Init
 */

import { connect } from "@brontosaurus/db";
import { LOG_LEVEL, SudooLog } from "@sudoo/log";
import { Connection } from "mongoose";
import { prepareAccount } from "./account";
import { prepareApplication } from "./application";
import { PreparedGroup, prepareGroup } from "./group";
import { PreparedNamespace, prepareNamespace } from "./namespace";
import { ERROR_CODE, panic } from "./panic";
import { checkPrepared, preparePreference } from "./preference";

export const initDatabase = async (databasePath: string): Promise<boolean> => {

    const db: Connection = connect(databasePath);
    db.on('error', console.log.bind(console, 'connection error:'));

    const log: SudooLog = SudooLog.create(LOG_LEVEL.DEBUG);

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

        log.info('Namespace');
        const namespaces: PreparedNamespace = await prepareNamespace();

        log.info('Account');
        await prepareAccount(groups, namespaces);

        log.info('Succeed');
        return true;
    } catch (err) {

        log.error(err);
        log.critical('Failed');
        return false;
    } finally {

        await db.close();
        log.info('Database Closed');
    }
};
