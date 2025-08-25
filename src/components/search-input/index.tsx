import { Search, X } from "lucide-react"
import { SearchInputProps } from "./types"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const SearchInput = ({ searchTerm, setSearchTerm }: SearchInputProps) => {
  const handleClear = () => {
    setSearchTerm('')
  }
  return <div className="relative max-w-sm w-full">
    <div className="absolute top-1 left-1 rounded-lg bg-slate-50 size-10 border grid place-content-center">
      <Search className="size-4 text-muted-foreground" />
    </div>
    <Input
      placeholder="Search"
      className="pl-12 h-12 rounded-lg w-full"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {searchTerm && <Button variant={'ghost'} size={'icon'} className="absolute top-1.5 right-1" onClick={handleClear}><X /></Button>}
  </div>
}