'use client';

import type { Challenge } from '@prisma/client';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Challenge>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'difficulty',
    header: 'Difficulty',
  },
  {
    accessorKey: 'shortDescription',
    header: 'Description',
  },
  {
    accessorKey: 'user.name',
    header: 'Created By',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created On',
    cell: (info) => new Date(info.getValue() as Date).toLocaleDateString(),
  },
];