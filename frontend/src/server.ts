import * as sapper from "@sapper/server";
import express from "express";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

express().use(sirv("public", { dev }), sapper.middleware()).listen(PORT);
