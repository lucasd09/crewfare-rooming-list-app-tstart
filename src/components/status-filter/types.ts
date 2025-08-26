import { Dispatch, SetStateAction } from "react";

export type SearchFilters = {
  active: boolean;
  closed: boolean;
  cancelled: boolean;
};

export type StatusFilterProps = {
  filters: SearchFilters;
  setFilters: Dispatch<SetStateAction<SearchFilters>>;
};
