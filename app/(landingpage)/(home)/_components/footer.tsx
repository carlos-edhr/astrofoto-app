"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook, Heart } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="z-40 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Star-like decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30"></div>
                <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Congreso <span className="font-extrabold">Astrofotografía</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              El encuentro internacional líder para astrónomos y fotógrafos que
              exploran las maravillas del cosmos a través del lente.
            </p>
          </motion.div>

          {/* Community Column */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Comunidad</h4>
            <div className="space-y-3">
              <Link
                href="https://www.youtube.com/@ifnastro/videos"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-300 transition-colors"
              >
                <Youtube className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>YouTube</span>
              </Link>
              <Link
                href="https://www.instagram.com/ifnastro/"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/ifnastro"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>Facebook</span>
              </Link>
            </div>
          </motion.div>

          {/* About Column */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Contacto</h4>
            <div className="space-y-3">
              <Link
                href="http://wa.me/526647200826"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg> */}
                <FaWhatsapp className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>WhatsApp</span>
              </Link>
              <div className="flex items-center gap-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>
                <span>congreso@leyvafotografia.com</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Column */}
          {/* <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Suscríbete</h4>
            <p className="text-gray-400 text-sm">
              Recibe las últimas noticias sobre el congreso y eventos
              astronómicos
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Enviar
              </Button>
            </div>
          </motion.div> */}
        </div>

        {/* Divider with cosmic effect */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center md:text-left text-gray-500 text-sm"
          >
            <p>
              © {new Date().getFullYear()} Congreso Internacional de
              Astrofotografía.
              <br />
              Todos los derechos reservados.
            </p>
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="text-gray-500 text-sm flex items-center">
              <span className="mr-1">Desarrollado con</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span className="mr-1">por</span>
              <Link
                href="https://www.carlos-ehr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                carlos-ehr.com
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
