import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env";
import roomingListBookingsJSON from "../lib/data/rooming-list-bookings.json";
import { post } from "./helpers";

export const insertRoomingListBookings = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  return await post(
    `${env.API_URL}/roomingListBooking/bulk`,
    roomingListBookingsJSON,
  );
});
