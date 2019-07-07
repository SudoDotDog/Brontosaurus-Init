/**
 * @author WMXPY
 * @namespace Polyfills
 * @description Fix Anchor
 */

import { AccountController, ApplicationController, connect, DecoratorController, fitAnchor, GroupController, IAccountModel, IApplicationModel, IDecoratorModel, IGroupModel, IOrganizationModel, OrganizationController } from "@brontosaurus/db";
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

        const accounts: IAccountModel[] = await AccountController.getAllAccounts();
        for (const account of accounts) {

            const anchor: string = fitAnchor(account.username);
            (account as any).anchor = anchor;

            await account.save();
        }

        const applications: IApplicationModel[] = await ApplicationController.getAllApplications();
        for (const application of applications) {

            const anchor: string = fitAnchor(application.name);
            (application as any).anchor = anchor;

            await application.save();
        }

        const groups: IGroupModel[] = await GroupController.getAllGroups();
        for (const group of groups) {

            const anchor: string = fitAnchor(group.name);
            (group as any).anchor = anchor;

            await group.save();
        }

        const organizations: IOrganizationModel[] = await OrganizationController.getAllOrganizations();
        for (const organization of organizations) {

            const anchor: string = fitAnchor(organization.name);
            (organization as any).anchor = anchor;

            await organization.save();
        }

        const decorators: IDecoratorModel[] = await DecoratorController.getAllDecorators();
        for (const decorator of decorators) {

            const anchor: string = fitAnchor(decorator.name);
            (decorator as any).anchor = anchor;

            await decorator.save();
        }
    } catch (err) {

        log.error(err);
        log.critical('Failed');
    } finally {

        await db.close();
        log.info('Database Closed');
    }
})();
