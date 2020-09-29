/**
 * @author WMXPY
 * @namespace Init
 * @description CLI
 */

import { Argument, Coco, Command, Option } from "@sudoo/coco";

const coco = Coco.create();

type CommandOption = {

    readonly databasePath: string;
};

coco.command(Command.create('init')
    .argument(Argument.create('databasePath'))
    .then(async (args: CommandOption) => {
        const path: string = Path.resolve(args.path);
        const version: Version = await readConfig(path);
        console.log(version.toString());
    }),
);

export const execute = async (args: string[]): Promise<void> => {

    await coco.go(args);
};
