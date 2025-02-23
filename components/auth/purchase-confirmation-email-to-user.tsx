import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

interface PurchaseConfirmationEmailToUser {
  streamName: string;
  purchaseId: string;
  username: string;
  purchaseAmount: number;
}

export const PurchaseConfirmationEmailToUser: React.FC<
  Readonly<PurchaseConfirmationEmailToUser>
> = ({ streamName, purchaseId, username, purchaseAmount }) => {
  return (
    <div>
      <Tailwind>
        <div className="bg-gray-50 font-sans p-4">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
            {/* Logo */}
            {/* <div className="p-6 border-b bg-slate-900">
              <img
                src="/brand/CIAF8-Logo1.png"
                alt="Congreso Internacional de Astrofotografía"
                className="h-16 mx-auto"
              />
            </div> */}

            {/* Header */}
            <div className="bg-sky-700 text-white text-center py-8">
              <h1 className="text-2xl font-bold tracking-wide">
                ¡Bienvenido al Congreso de Astrofotografía! 🌌
              </h1>
              <p className="mt-2 text-sm opacity-90">
                ¡Tu compra se ha completado exitosamente! Prepárate para vivir
                una experiencia astronómica única
              </p>
            </div>

            {/* Body */}
            <div className="p-8 space-y-4">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-800 font-semibold">
                  ¡Hola {username}! 🎉
                </p>
                <p className="text-gray-600 mt-2">
                  Estamos emocionados de tenerte con nosotros. Aquí están los
                  detalles de tu inscripción:
                </p>
              </div>

              <div className="space-y-2 text-gray-700 bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Evento:{"    "}</span>
                  <span className="text-blue-800 font-semibold">
                    {streamName}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Número de ticket:{"    "}</span>
                  <span className="text-blue-800">{purchaseId}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Inversion total:{"    "}</span>
                  <span className="text-green-600 font-bold">
                    ${purchaseAmount.toLocaleString("es-MX")} MXN
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  📌 Guarda este correo como comprobante de tu inscripción.
                  <br />
                  📩 En los próximos días recibirás acceso exclusivo al evento.
                  <br />✨ ¡Prepárate para capturar las estrellas como nunca
                  antes!
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ¿Preguntas? Estamos aquí para ayudarte:
                    <br />
                    <a
                      href="mailto:contacto@ciaf.com"
                      className="text-blue-600 hover:underline"
                    >
                      contacto@ciaf.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 py-8 px-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600 font-semibold">
                  ¡Conéctate con la comunidad astrofotográfica! 📸
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href="https://www.youtube.com/@ifnastro/videos"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/ifnastro/"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/ifnastro"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Facebook
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Congreso Internacional de Astrofotografía
                  <br />
                  Baja California, México
                  <br />
                  ¡El universo nos espera! 🚀
                </p>
                <p className="text-xs text-gray-400 mt-2">
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
