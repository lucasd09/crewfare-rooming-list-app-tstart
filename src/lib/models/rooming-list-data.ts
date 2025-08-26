import { RoomingList } from "./rooming-list";

export type RoomingListData = {
  eventId: number;
  eventName: string;
  roomingCount: number;
  roomingLists: RoomingList[];
  color?: string;
};
