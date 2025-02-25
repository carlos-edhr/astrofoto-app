"use client";

import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { ViewTicketButton } from "./view-ticket-button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ComprasUsuario = {
  id: string;
  idCompra: string;
  userId: string;
  imageUrl: string;
  articulo: string;
  username: string;
  createdAt: string;
};

export const columns: ColumnDef<ComprasUsuario>[] = [
  {
    accessorKey: "articulo",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Artículo
        <ArrowUpDown className="ml-2 h-4 w-4 " />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <span>{row.original.articulo}</span>
      </div>
    ),
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Usuario
        <ArrowUpDown className="ml-2 h-4 w-4 " />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        {/* <UserAvatar
          username={row.original.username}
          imageUrl={row.original.imageUrl}
        /> */}
        <span>{row.original.username}</span>
      </div>
    ),
  },
  {
    accessorKey: "idCompra",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        ID de la Compra
        <ArrowUpDown className="ml-2 h-4 w-4 " />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        {/* <UserAvatar
          username={row.original.username}
          imageUrl={row.original.imageUrl}
        /> */}
        <span>{row.original.idCompra}</span>
      </div>
    ),
  },
  {
    accessorKey: "fechaCompra",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Fecha de Compra
        <ArrowUpDown className="ml-2 h-4 w-4 " />
      </Button>
    ),
  },
  {
    id: "recibo",
    cell: ({ row }) => <ViewTicketButton purchaseId={row.original.idCompra} />,
  },
];
