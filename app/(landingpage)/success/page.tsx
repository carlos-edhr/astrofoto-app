// app/success/page.tsx
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sessionId = searchParams.session_id as string;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-lg p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">
          ¡Gracias por tu compra!
        </h1>
        <p className="text-gray-300 mb-6">
          Tu pago ha sido procesado exitosamente. Hemos enviado un correo de
          confirmación con los detalles de tu inscripción.
        </p>

        {sessionId && (
          <div className="bg-zinc-800 rounded-lg p-4 mb-6">
            <p className="text-gray-400 text-sm mb-1">ID de transacción:</p>
            <p className="text-white font-mono text-sm break-all">
              {sessionId}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="bg-blue-600 text-white font-medium py-3 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="mailto:contacto@ciaf.com"
            className="border border-gray-700 text-gray-300 font-medium py-3 px-4 rounded hover:bg-zinc-800 transition-colors"
          >
            Contactar soporte
          </Link>
        </div>
      </div>
    </div>
  );
}
