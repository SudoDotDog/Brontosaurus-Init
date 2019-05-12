/**
 * @author WMXPY
 * @namespace Init
 * @description Index
 */

import { connect } from "@brontosaurus/db";
import { Connection } from "mongoose";

const database: string | undefined = process.env.BRONTOSAURUS_DB || process.env.BRONTOSAURUS_DATABASE;

const db: Connection = connect(database);
