// components/guest-registration-form.tsx
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { createGuestCheckoutSession } from "@/actions/guest-checkout";

// Updated schema to include plan selection
const formSchema = z.object({
  planId: z.string().min(1, "Selecciona un plan"),
  fullName: z.string().min(2, "Nombre completo es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(5, "Teléfono es requerido"),
});

// Hardcoded plans with prices
const PLANS = [
  {
    id: "MAIN_STAGE",
    name: "MAIN STAGE PASS",
    price: 1200,
    description: "Acceso a conferencias en modalidad híbrida",
  },
  {
    id: "STARGAZER",
    name: "STARGAZER PASS",
    price: 6000,
    description: "Dos noches de campamento en Sierra de Juárez",
  },
  {
    id: "FULL_ACCESS",
    name: "FULL-ACCESS PASS",
    price: 6800,
    description: "Experiencia completa del Congreso",
  },
];

export function GuestRegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planId: PLANS[0].id,
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const watchPlanId = form.watch("planId");

  // Update selected plan when form value changes
  useEffect(() => {
    const plan = PLANS.find((p) => p.id === watchPlanId);
    if (plan) setSelectedPlan(plan);
  }, [watchPlanId]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const plan = PLANS.find((p) => p.id === values.planId);
      if (!plan) {
        throw new Error("Plan seleccionado no válido");
      }

      const sessionUrl = await createGuestCheckoutSession({
        plan: plan.id,
        guestName: values.fullName,
        guestEmail: values.email,
        guestPhone: values.phone,
        price: plan.price,
      });

      window.location.href = sessionUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Error al procesar el pago. Intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="my-32 md:my-56 p-6 bg-zinc-900 rounded-xl max-w-md mx-auto">
      <h3 className="text-xl font-robotoCondensed mb-6 text-white text-center">
        Registro para el Congreso de Astrofotografía
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="planId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Plan <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-gray-100 bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Selecciona un plan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-zinc-800 border-zinc-700 text-gray-100">
                    {PLANS.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        <div className="flex flex-col">
                          <span>{plan.name}</span>
                          <span className="text-xs text-gray-400">
                            {plan.description}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="p-4 bg-zinc-800 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total a pagar:</span>
              <span className="text-xl font-bold text-blue-400">
                ${selectedPlan.price.toLocaleString("es-MX")} MXN
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Plan seleccionado:{" "}
              <span className="text-white">{selectedPlan.name}</span>
            </p>
          </div>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Nombre completo <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre completo"
                    className="text-gray-100 bg-zinc-800 border-zinc-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="text-gray-100 bg-zinc-800 border-zinc-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Teléfono <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+52 664 123 4567"
                    className="text-gray-100 bg-zinc-800 border-zinc-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Procesando...
                </>
              ) : (
                "Continuar al pago"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
