export type RoomingList = {
  roomingListId: number;
  eventId: number;
  eventName: string;
  hotelId: number;
  rfpName: string;
  cutOffDate: string;
  status: "completed" | "received" | "archived" | "Confirmed";
  agreementType: "leisure" | "staff";
};
