// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Navigation from "../sub/navigation";
// import HeaderButtons from "../sub/header-buttons";
// import { FaBars } from "react-icons/fa";
// import Image from "next/image";

// type Props = {
//   activeItem: number;
//   children: React.ReactNode;
// };

// const Header = async ({ activeItem, children }: Props) => {
//   const [active, setactive] = useState(false);
//   const [open, setOpen] = useState(false);

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 8000) {
//         setactive(true);
//       } else {
//         setactive(false);
//       }
//     });
//   }
//   const handleClose = (e: React.MouseEvent) => {
//     const target = e.target as HTMLElement;
//     if (target.id === "screen") {
//       setOpen(!open);
//     }
//   };

//   return (
//     <div
//       className={`z-50 w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0 bg-[#000000]"} `}
//     >
//       <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
//         <div className="z-50 flex  items-center justify-center">
//           <Image
//             src="/CIAF7 Logo-35.png"
//             alt="logo"
//             width={75}
//             height={75}
//             className="cursor-pointer hover:animate-slowspin"
//           />
//           <div>
//             <Link href={""} />

//             <h1 className="font-Inter text-3xl cursor-pointer">
//               Congreso de
//               <span className="text-primaryLanding">Astrofotografía</span>
//             </h1>
//           </div>
//         </div>

//         <div className="flex">
//           <Navigation activeItem={activeItem} />
//         </div>
//         <div className="flex items-center ml-10">{children}</div>
//       </div>
//       {/* TODO */}

//       {/* for mobile screen */}
//       <div className="z-50 w-full md:hidden flex items-center justify-between">
//         <div>
//           <div className="flex  items-center justify-center">
//             <Image
//               src="/CIAF7 Logo-35.png"
//               alt="logo"
//               width={75}
//               height={75}
//               className="cursor-pointer hover:animate-slowspin"
//             />
//             <div>
//               <Link href={""} />

//               <h1 className="z-50 font-Inter text-3xl cursor-pointer">
//                 Congreso de
//                 <span className="text-primaryLanding">Astrofotografía</span>
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="z-50">
//           <FaBars
//             className="z-50 text-2xl cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>

//         {open && (
//           <div
//             className="fixed md:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
//             onClick={handleClose}
//             id="screen"
//           >
//             <div className="fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999]">
//               <div className="mt-20 p-5">
//                 <Navigation activeItem={activeItem} />
//                 {/* USER TODO */}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
