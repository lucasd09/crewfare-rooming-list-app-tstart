import { EventsSkeleton } from '@/components/events-skeleton'
import { RoomingListEmpty } from '@/components/rooming-list-empty'
import { RoomingListEvent } from '@/components/rooming-list-event'
import { SearchInput } from '@/components/search-input'
import { StatusFilter } from '@/components/status-filter'
import { SearchFilters } from '@/components/status-filter/types'
import { Button } from '@/components/ui/button'
import { getRoomingListData } from '@/fn/get-rooming-list-data'
import { useDebounce } from '@/lib/hooks/use-debounce'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<SearchFilters>({
    active: true,
    closed: true,
    cancelled: false,
  })
  const [page, setPage] = useState(1)
  const [limit] = useState(10)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const { data, isLoading } = useQuery({
    queryKey: ['rooming-lists', debouncedSearchTerm, filters, page, limit],
    queryFn: () => getRoomingListData({
      data: {
        searchTerm: debouncedSearchTerm,
        filters,
        page,
        limit
      }
    }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })

  const handlePreviousPage = () => {
    if (data?.hasPrevious) {
      setPage(prev => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (data?.hasNext) {
      setPage(prev => prev + 1)
    }
  }

  return (
    <div className="px-8 py-12 flex flex-col gap-6 h-full min-h-screen bg-background">
      <h1 className="text-2xl font-bold mb-6 text-[#141416]">Rooming List Management: Events</h1>
      <div className="flex flex-col sm:flex-row gap-2 sticky top-0 z-10 bg-background sm:static py-4">
        <div className="flex gap-2 justify-between">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <StatusFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className="">
          {/* <InsertRoomingListButton /> */}
        </div>
      </div>

      {isLoading
        ? <EventsSkeleton />
        : data?.items?.length
          ? (
            <>
              {data.items.map((event, i) => (<RoomingListEvent key={i} event={event} />))}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing {data.items.length} of {data.total} items
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePreviousPage}
                    disabled={!data.hasPrevious}
                  >
                    <ChevronLeft className="size-4" />
                  </Button>
                  <span className="text-sm">
                    Page {data.page} of {data.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextPage}
                    disabled={!data.hasNext}
                  >
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </>
          )
          : <RoomingListEmpty />
      }
    </div >
  )
}
