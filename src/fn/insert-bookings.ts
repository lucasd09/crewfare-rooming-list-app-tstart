import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env";
import bookingsJSON from "../lib/data/bookings.json";
import { post } from "./helpers";

export const insertBookings = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  return await post(`${env.API_URL}/bookings/bulk`, bookingsJSON);
});
