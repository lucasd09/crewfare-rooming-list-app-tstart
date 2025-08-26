import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetAndInsertData } from "@/fn/reset-and-insert-data";
import { Button } from "../ui/button";

export const InsertRoomingListButton = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: resetAndInsertData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roomingLists"] });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["roomingListBookings"] });
    },
  });

  return (
    <Button
      onClick={() => mutate({})}
      isLoading={isPending}
      className="h-12 w-full"
    >
      Insert Bookings and Rooming Lists
    </Button>
  );
};
