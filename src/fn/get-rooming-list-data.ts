import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env";
import { PaginatedResponse } from "@/lib/models/paginated-response";
import { RoomingListData } from "@/lib/models/rooming-list-data";
import { get } from "./helpers";

export const getRoomingListData = createServerFn({
  method: "GET",
  response: "data",
})
  .validator((params: unknown) => {
    const p = params as {
      searchTerm?: string;
      filters?: { active?: boolean; closed?: boolean; cancelled?: boolean };
      page?: number;
      limit?: number;
    };
    return p;
  })
  .handler(async (ctx) => {
    const { searchTerm, filters, page, limit } = ctx.data;
    const queryParams = new URLSearchParams();

    if (searchTerm) {
      queryParams.append("search", searchTerm);
    }
    if (filters) {
      if (filters.active !== undefined) {
        queryParams.append("active", String(filters.active));
      }
      if (filters.closed !== undefined) {
        queryParams.append("closed", String(filters.closed));
      }
      if (filters.cancelled !== undefined) {
        queryParams.append("cancelled", String(filters.cancelled));
      }
    }
    if (page !== undefined) {
      queryParams.append("page", String(page));
    }
    if (limit !== undefined) {
      queryParams.append("limit", String(limit));
    }

    const data = await get<PaginatedResponse<RoomingListData>>(
      `${env.API_URL}/roomingLists/getListData?${queryParams.toString()}`,
    );

    return data;
  });
