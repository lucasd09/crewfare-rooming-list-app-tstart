import { BookMarked } from "lucide-react"

export const RoomingListEmpty = () => {
  return <div className="grid place-content-center grow text-center">
    <div className="flex flex-col items-center gap-4">

      <BookMarked className="size-12 text-primary" />
      <p className="text-muted-foreground">No Rooming lists found!</p>
    </div>
  </div>
}