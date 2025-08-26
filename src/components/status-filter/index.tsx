import { SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SearchFilters, StatusFilterProps } from "./types";

export const StatusFilter = ({ filters, setFilters }: StatusFilterProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 h-12"
        >
          <p className="hidden sm:block">Filters</p>
          <SlidersHorizontal className="text-emerald-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 ml-24 mr-8 sm:mr-1"
        sideOffset={8}
      >
        <div className="p-2">
          <DropdownMenuLabel className="mb-2 text-sm text-start text-muted-foreground font-medium">
            RFP STATUS
          </DropdownMenuLabel>
          <div className="flex gap-2 items-center select-none">
            <Checkbox
              id="active"
              checked={filters.active}
              onCheckedChange={(checked) =>
                setFilters((prev: SearchFilters) => ({
                  ...prev,
                  active: checked === true,
                }))
              }
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex gap-2 items-center select-none">
            <Checkbox
              id="closed"
              checked={filters.closed}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({ ...prev, closed: checked === true }))
              }
            />
            <label htmlFor="closed">Closed</label>
          </div>
          <div className="flex gap-2 items-center select-none">
            <Checkbox
              id="cancelled"
              checked={filters.cancelled}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({ ...prev, cancelled: checked === true }))
              }
            />
            <label htmlFor="cancelled">Canceled</label>
          </div>
          <Button className="w-full mt-4">Save</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
