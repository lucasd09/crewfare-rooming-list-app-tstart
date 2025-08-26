import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env";
import { Booking } from "@/lib/models/booking";
import { get, post } from "./helpers";

export const removeAllBookings = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  const bookings = await get<Booking[]>(`${env.API_URL}/bookings`);
  const ids = bookings.map((b) => b.bookingId);

  return await post(`${env.API_URL}/bookings/deleteBulk/`, ids);
});
