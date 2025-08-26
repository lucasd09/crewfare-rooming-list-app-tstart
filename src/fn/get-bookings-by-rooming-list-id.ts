import { env } from '@/lib/env';
import { BookingsListData } from '@/lib/models/bookings-list-data';
import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

export const getBookingsByRoomingListId = 
  createServerFn({
    method: 'GET',
    response: 'data',
  })
    .validator(
      z.object({
        id: z.number().int().positive(),
      }),
    )
    .handler(async ({ data }) => {
      const res = await fetch(
        `${env.API_URL}/bookings/byRoomingListId/${data.id}`,
        { method: 'GET' },
      );

      if (!res.ok) {
        throw new Error(
          `Erro ao buscar reservas para a rooming list ${data.id}. Status: ${res.status}`,
        );
      }

      const json: BookingsListData = await res.json();
      return json;
    });