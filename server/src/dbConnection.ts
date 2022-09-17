import { DataSource } from "typeorm";
import { client } from "./entities/client";
import { campaign } from "./entities/campaign";

export const data = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345678",
  database: "brame",
  entities: [client, campaign],
});

export function dbInit() {
  data
    .initialize()
    .then(() => {
      console.log("Db initialized");
    })
    .catch((err: any) => {
      console.error("Error while initializing db", err);
    });
}
