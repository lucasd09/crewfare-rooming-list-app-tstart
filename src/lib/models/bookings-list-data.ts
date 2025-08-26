import { Booking } from "./booking";

export type BookingsListData = {
  minDate: string;
  maxDate: string;
  bookingsCount: number;
  bookings: Booking[];
};
