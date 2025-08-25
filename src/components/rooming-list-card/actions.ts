"use server";

import { env } from "@/lib/env";
import { BookingsListData } from "@/models/bookings-list-data";

export const getBookingsByRoomingListId = async (
  id: number,
): Promise<BookingsListData> => {
  const res = await fetch(`${env.API_URL}/bookings/byRoomingListId/${id}`, {
    method: "GET",
  });

  const data: BookingsListData = await res.json();

  return data;
};
