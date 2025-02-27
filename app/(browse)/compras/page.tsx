// videos.tsx
import Image from "next/image";
import DashboardHeader from "../_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { Play } from "lucide-react"; // Install lucide-react for icons
import DashboardFooter from "../_components/dashboard-footer";
import { DataTable } from "./_components/data-table";
import { ColumnDef } from "@tanstack/react-table";

const ComprasPage = () => {
  const columns: ColumnDef<any, any>[] = [
    { header: "Artículo", accessorKey: "articulo" },
    { header: "Usuario", accessorKey: "username" },
    { header: "ID de la Compra", accessorKey: "idCompra" },
    { header: "Fecha de Compra", accessorKey: "fechaCompra" },
    { header: "Recibo", accessorKey: "recibo" },
  ];
  const formattedData = [
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
    {
      articulo: "Boleto Congreso",
      username: "johndoe",
      idCompra: "123456",
      fechaCompra: format(new Date(), "24/02/2025"),
      recibo: "recibo123.pdf",
    },
    {
      articulo: "Video Curso",
      username: "janedoe",
      idCompra: "789012",
      fechaCompra: format(new Date(), "17/01/2025"),
      recibo: "recibo456.pdf",
    },
    {
      articulo: "Merchandising",
      username: "alice",
      idCompra: "345678",
      fechaCompra: format(new Date(), "09/01/2025"),
      recibo: "recibo789.pdf",
    },
  ];
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto ">
      <DashboardHeader
        title={"Compras"}
        subtitle={
          "Aquí encontrarás todas tus compras realizadas en el sitio del Congreso (boletos o acceso al Congreso, videos pre-grabados del cursos ó mercancía de nuestra tienda)."
        }
      />
      <section className="container min-h-screen mx-auto px-4 py-12 bg-blackSpace">
        <h2 className="text-2xl font-bold mb-8">Compras realizadas</h2>

        <Separator className="w-full h-[1px]  m-7 bg-slate-500 mt-8" />
        <DataTable columns={columns} data={formattedData} />
      </section>
      <DashboardFooter />
    </div>
  );
};

export default ComprasPage;
