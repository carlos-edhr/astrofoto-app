import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";
import {
  Eye,
  DollarSign,
  Package,
  Users,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { WeekChart } from "../_components/week-chart";
import ProductTable from "../_components/product-table";

// Dynamically import the chart component with SSR disabled
const PaymentsChart = dynamic(
  () =>
    import("../_components/payments-chart").then((mod) => mod.PaymentsChart),
  {
    ssr: false,
    loading: () => (
      <div className="h-80 bg-stone-700/50 animate-pulse rounded-lg" />
    ),
  },
);

const stats = [
  {
    title: "Usuarios Activos",
    value: "3.5K",
    icon: Eye,
    percentage: "0.43%",
    trend: "up",
  },
  {
    title: "Ganancias Totales",
    value: "$4.2K",
    icon: DollarSign,
    percentage: "4.33%",
    trend: "up",
  },
  {
    title: "Productos Totales",
    value: "3.5K",
    icon: Package,
    percentage: "2.59%",
    trend: "up",
  },
  {
    title: "Ventas Totales",
    value: "3.5K",
    icon: Users,
    percentage: "0.99%",
    trend: "down",
  },
];

const AdminDashboard = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Panel del Administrador"}
        subtitle={
          "¡Bienvenido! Aquí puedes revisar y modificar información crucial acerca de tu aplicación."
        }
      />

      {/* MAIN DASHBOARD SECTION HERE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-stone-800 p-6 rounded-lg shadow-sm border border-slate-700"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-600 font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm ml-1 ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.percentage}
                    {stat.trend === "up" ? "↑" : "↓"}
                  </span>
                </div>
              </div>
              <div className="bg-slate-100/50 p-3 rounded-full">
                <stat.icon className="h-6 w-6 text-slate-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" />
      {/* Payments Overview Section */}
      <div className="bg-stone-800 p-6 rounded-lg shadow-sm border border-slate-700 mb-12">
        {/* <h2 className="text-xl font-semibold mb-6">Pagos por mes</h2> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left Column Content */}
          <PaymentsChart />
          {/* Right Column - Chart */}
          {/* <h2 className="text-xl font-semibold mb-6">Pagos por semana</h2> */}
          <WeekChart />
        </div>
      </div>

      <Separator className="w-full h-[1px] m-7 bg-slate-800 mt-8" />

      {/* TABLA */}
      <ProductTable />

      <DashboardFooter />
    </div>
  );
};

export default AdminDashboard;
