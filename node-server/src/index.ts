import chalk from "chalk";
import express from "express";
import { createServer } from "http";
const app = express();
const server = createServer(app);
server.listen({port: 8000},  () => {
    console.log(`Server running`);
    console.log(chalk.yellow('Server warning is on'))
})
