import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env";
import roomingListsJSON from "../lib/data/rooming-lists.json";
import { post } from "./helpers";

export const insertRoomingLists = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  return await post(`${env.API_URL}/roomingLists/bulk`, roomingListsJSON);
});
