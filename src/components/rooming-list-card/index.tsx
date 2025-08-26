"use client";
import { useQuery } from "@tanstack/react-query";
import { getBookingsByRoomingListId } from "@/fn/get-bookings-by-rooming-list-id";
import { dateFormat, uppercaseFirstLetter } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { AgreementButton } from "./components/agreement-button";
import { DateRangeDisplay } from "./components/date-range-display";
import { RoomingListCardProps } from "./types";

export const RoomingListCard = ({ roomingList }: RoomingListCardProps) => {
  const { day: cutOffDay, month: cutOffMonth } = dateFormat(
    roomingList.cutOffDate,
  );

  const { data, isFetching } = useQuery({
    queryKey: ["bookings", roomingList.roomingListId],
    queryFn: () =>
      getBookingsByRoomingListId({ data: { id: roomingList.roomingListId } }),
  });

  const handleLogBookings = () => {
    console.table(data?.bookings);
  };

  return (
    <Card className="flex flex-col gap-3 p-4 min-w-full sm:min-w-[400px]">
      <div className="flex justify-between ">
        <div>
          <h3 className="font-bold text-[#141416]">{roomingList.rfpName}</h3>
          <div className="flex text-sm gap-1">
            <p className="text-muted-foreground">Agreement:</p>
            <p className="font-medium">
              {uppercaseFirstLetter(roomingList.agreementType)}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="bg-blue-50 text-center rounded-xl pb-1 w-fit">
            <div className="text-xs text-blue-500 bg-blue-500/20 rounded-t-xl px-4">
              {cutOffMonth}
            </div>
            <div className="text-xl font-bold text-blue-500">{cutOffDay}</div>
          </div>
          <div className="text-xs text-muted-foreground">Cut-Off Date</div>
        </div>
      </div>
      {isFetching ? (
        <Skeleton className="w-full h-5" />
      ) : (
        <DateRangeDisplay
          min={data?.minDate ?? ""}
          max={data?.maxDate ?? ""}
        />
      )}

      <div className="flex gap-2">
        <Button
          className="flex-1 h-10"
          onClick={handleLogBookings}
          isLoading={isFetching}
        >
          View Bookings ({data?.bookingsCount})
        </Button>
        <AgreementButton />
      </div>
    </Card>
  );
};
