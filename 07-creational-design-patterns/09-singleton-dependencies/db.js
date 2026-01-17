import { DatabaseSync } from "node:sqlite";

export const db = new DatabaseSync(`${import.meta.dirname}/data.sqlite`);
