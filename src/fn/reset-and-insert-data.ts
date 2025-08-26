import { createServerFn } from "@tanstack/react-start";
import { insertBookings } from "./insert-bookings";
import { insertRoomingListBookings } from "./insert-rooming-list-bookings";
import { insertRoomingLists } from "./insert-rooming-lists";
import { removeAllBookings } from "./remove-all-bookings";
import { removeAllRoomingLists } from "./remove-all-rooming-lists";

export const resetAndInsertData = createServerFn({
  method: "POST",
  response: "data",
}).handler(async () => {
  try {
    await removeAllRoomingLists();
    await removeAllBookings();

    await insertRoomingLists();
    await insertBookings();
    await insertRoomingListBookings();

    return { success: true, message: "Data succesfully inserted" };
  } catch (error) {
    console.error("Error inserting data:", error);
    throw new Error("Error inserting data");
  }
});
