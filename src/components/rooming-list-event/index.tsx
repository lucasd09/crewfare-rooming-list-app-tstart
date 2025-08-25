import { Badge } from "../ui/badge";
import { RoomingListEventProps } from "./types"
import { cn } from "@/lib/utils";

export const RoomingListEvent = ({ event }: RoomingListEventProps) => {
  const color = event.color;

  return <>
    <div className="flex itens center gap-2 items-center">
      <div className={cn(`h-px bg-gradient-to-r w-full`, color ? `from-${color}-50 to-${color}-500` : `from-indigo-50 to-indigo-500`)} />
      <Badge variant="outline" className={`bg-${color}-50 text-${color}-600 border-${color}-200 flex justify-center w-60`}>
        {event.eventName}
      </Badge>
      <div className={`h-px bg-gradient-to-r from-${color}-500 to-${color}-50 w-full`} />
    </div>

    <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-4">
      {event.roomingLists.map((roomingList) => (
        <RoomingListCard key={roomingList.roomingListId} roomingList={roomingList} />
      ))}
    </div>
  </>
} 