import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

interface PurchaseConfirmationEmailToAdmin {
  streamName: string;
  purchaseId: string;
  username: string;
  userEmail: string;
  purchaseAmount: number;
}

export const PurchaseConfirmationEmailToAdmin: React.FC<
  Readonly<PurchaseConfirmationEmailToAdmin>
> = ({ streamName, purchaseId, username, userEmail, purchaseAmount }) => {
  return (
    <div>
      <Tailwind>
        <div className="bg-gray-50 font-sans p-4">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
            {/* Logo placeholder */}
            {/* <div className="p-6 border-b">
              <img
                src="/brand/CIAF8-Logo1.png"
                alt="Congreso Internacional de Astrofotografía"
                className="h-16 mx-auto"
              />
            </div> */}

            {/* Header */}
            <div className="bg-slate-800 text-white text-center py-8">
              <h1 className="text-2xl font-bold tracking-wide">
                Congreso Internacional de Astrofotografía
              </h1>
              <h1 className="text-2xl font-bold tracking-wide">
                Confirmación de Compra Exitosa
              </h1>
              <p className="mt-2 text-sm opacity-90">
                Nuevo registro realizado en el sistema
              </p>
            </div>

            {/* Body */}
            <div className="p-8 space-y-4">
              <p className="text-xl text-gray-800 font-semibold">
                Detalles de la compra:
              </p>

              <div className="text-lg space-y-2 text-gray-900">
                <div className="flex justify-between text-gray-900 border-b pb-2">
                  <span className="font-bold">Nombre del Stream:{"    "}</span>
                  <span>{streamName}</span>
                </div>
                <div className="flex justify-between text-gray-900 border-b pb-2">
                  <span className="font-bold">ID de Compra:{"    "}</span>
                  <span>{purchaseId}</span>
                </div>
                <div className="flex justify-between text-gray-900 border-b pb-2">
                  <span className="font-bold">Nombre de Usuario:{"    "}</span>
                  <span>{username}</span>
                </div>
                <div className="flex justify-between text-gray-900 border-b pb-2">
                  <span className="font-bold">Email del Usuario:{"    "}</span>
                  <span>{userEmail}</span>
                </div>
                <div className="flex justify-between text-red-600 border-b pb-2">
                  <span className="font-bold">Monto Total:{"    "}</span>
                  <span>${purchaseAmount.toLocaleString("es-ES")} MXN</span>
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Por favor verificar los datos del comprador y en caso de caso de
                que se requiera preparar los accesos correspondientes para el
                evento.
              </p>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 py-8 px-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Congreso Internacional de Astrofotografía
                </p>
                <p className="text-xs text-gray-500">Baja California, México</p>
                {/* <div className="flex justify-between space-x-4 mt-2">
                  <a
                    href="https://www.youtube.com/@ifnastro/videos"
                    className="text-slate-700 hover:text-slate-900 text-sm"
                  >
                    Youtube
                  </a>
                  <a
                    href="https://www.instagram.com/ifnastro/"
                    className="text-slate-700 hover:text-slate-900 text-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/ifnastro"
                    className="text-slate-700 hover:text-slate-900 text-sm"
                  >
                    Facebook
                  </a>
                </div> */}
                <p className="text-xs text-gray-400 mt-4">
                  © {new Date().getFullYear()} Congreso Internacional de
                  Astrofotografía. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Tailwind>
    </div>
  );
};
