import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { env } from "@/lib/env";
import { BookingsListData } from "@/lib/models/bookings-list-data";
import { get } from "./helpers";

export const getBookingsByRoomingListId = createServerFn({
  method: "GET",
  response: "data",
})
  .validator(
    z.object({
      id: z.number().int().positive(),
    }),
  )
  .handler(async ({ data }) => {
    const res = await get<BookingsListData>(
      `${env.API_URL}/bookings/byRoomingListId/${data.id}`,
    );

    if (!res) {
      throw new Error(`Error fetching data from rooming list ${data.id}.`);
    }
    return res;
  });
