"use client";
import { useState } from "react";
import {
  Calendar,
  User,
  ListChecks,
  FileText,
  Table,
  Layout,
  Mail,
  Inbox,
  DollarSign,
  Video,
  Camera,
  MonitorPlay,
  Store,
  LucideBarChart3,
  NotebookPen,
  Users,
  HomeIcon,
} from "lucide-react"; // Lucide Icons
import { useSidebar } from "@/store/use-sidebar";
import { Toggle } from "./toggle";
import Link from "next/link";

const Options = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { collapsed } = useSidebar((state) => state);

  // Handles item selection and submenu toggle
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === "Tasks") {
      setSubmenuOpen(!submenuOpen);
    } else {
      setSubmenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", href: "/home", icon: <HomeIcon /> },
    { name: "Streams", href: "/transmisiones", icon: <Video /> },
    { name: "Videos", href: "", icon: <MonitorPlay /> },
    { name: "Store", href: "", icon: <Store /> },
    { name: "Gallery", href: "", icon: <Camera /> },
    { name: "Purchases", href: "", icon: <ListChecks />, hasSubmenu: true },
    { name: "Calendar", href: "", icon: <Calendar /> },
    { name: "Profile", href: "", icon: <User /> },
  ];

  if (!collapsed) {
    return (
      <div className="h-screen lg:w-60 text-white px-5 pb-4 flex flex-col overflow-y-scroll">
        {/* <Toggle /> */}
        <div>
          <div className="text-lg font-semibold mb-5">Main Menu</div>

          {/* Main menu */}
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <button
                    className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === item.name ? "bg-gray-700" : "hover:bg-gray-700"}`}
                    onClick={() => handleItemClick(item.name)}
                  >
                    <span className="mr-4">{item.icon}</span>
                    {item.name}
                    {item.hasSubmenu && (
                      <span className="ml-auto">{submenuOpen ? "▲" : "▼"}</span>
                    )}
                  </button>
                </Link>
                {/* Submenu */}
                {item.hasSubmenu && submenuOpen && (
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg 
                    ${activeItem === "Sub Task 1" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                        onClick={() => setActiveItem("Sub Task 1")}
                      >
                        Store
                      </button>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg 
                    ${activeItem === "Sub Task 2" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                        onClick={() => setActiveItem("Sub Task 2")}
                      >
                        Videos
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Admin Section */}
          <div className="mt-10">
            <div className="text-sm text-gray-400 mb-2">ADMINISTRATION</div>
            <ul className="space-y-4">
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === "Inbox" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  onClick={() => handleItemClick("Inbox")}
                >
                  <LucideBarChart3 className="mr-4" />
                  Dashboard
                  <span className="ml-auto bg-bunkerBlue text-white px-2 py-1 rounded-full text-xs">
                    Admin
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === "Invoice" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  onClick={() => handleItemClick("Invoice")}
                >
                  <NotebookPen className="mr-4" />
                  Events
                  <span className="ml-auto bg-bunkerBlue text-white px-2 py-1 rounded-full text-xs">
                    Streamer
                  </span>
                </button>
              </li>

              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === "Messages" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  onClick={() => handleItemClick("Messages")}
                >
                  <Mail className="mr-4" />
                  Emails
                  {/* <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    5
                  </span> */}
                  <span className="ml-2 bg-bunkerBlue text-white px-2 py-1 rounded-full text-xs">
                    Admin
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === "Invoice" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  onClick={() => handleItemClick("Invoice")}
                >
                  <DollarSign className="mr-4" />
                  Sales
                  <span className="ml-auto bg-bunkerBlue text-white px-2 py-1 rounded-full text-xs">
                    Admin
                  </span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-lg 
              ${activeItem === "Messages" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                  onClick={() => handleItemClick("Messages")}
                >
                  <Users className="mr-4" />
                  Users
                  {/* <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    5
                  </span> */}
                  <span className="ml-2 bg-bunkerBlue text-white px-2 py-1 rounded-full text-xs">
                    Admin
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>2</p>
    </div>
  );
};

export default Options;
