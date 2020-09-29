/**
 * @author WMXPY
 * @namespace Init
 * @description CLI
 */

import { Argument, Coco, Command } from "@sudoo/coco";
import { initDatabase } from "./init";

const coco = Coco.create();

type CommandOption = {

    readonly databasePath: string;
};

coco.command(Command.create('init')
    .argument(Argument.create('databasePath'))
    .then(async (args: CommandOption) => {

        await initDatabase(args.databasePath);
    }),
);

export const execute = async (args: string[]): Promise<void> => {

    await coco.go(args);
};
