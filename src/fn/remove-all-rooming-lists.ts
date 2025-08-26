import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env";
import { RoomingList } from "@/lib/models/rooming-list";
import { get, post } from "./helpers";

export const removeAllRoomingLists = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  const roomingLists = await get<RoomingList[]>(`${env.API_URL}/roomingLists`);

  const ids = roomingLists.map((r) => r.roomingListId);

  return await post(`${env.API_URL}/roomingLists/deleteBulk/`, ids);
});
