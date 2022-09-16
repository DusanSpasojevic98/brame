import { DataSource } from "typeorm"
import { client } from "./entities/client"
import { campaign } from "./entities/campaign";

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "brame",
    entities: [client, campaign]
})

export function initializeDatabase() {
    myDataSource
        .initialize()
        .then(() => {
            console.log("Db initialized");
        })
        .catch((err: any) => {
            console.error("Error while initializing db", err)
        })
}