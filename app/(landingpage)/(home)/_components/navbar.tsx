"use client";
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { LogInIcon, Menu as MenuIcon, X as XIcon } from "lucide-react";
import Image from "next/image";
import ButtonHero from "./button-hero";

// Your existing nav items
const navItems = [
  "Nosotros",
  "Talleres",
  "Itinerario",
  "Inscripciones",
  "Galería",
];

const NavBar = () => {
  // Audio toggle
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  // Scroll/visibility logic
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle audio + visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Play/pause audio
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  // Show/hide navbar on scroll
  useEffect(() => {
    if (currentScrollY === 0) {
      // At top, show nav and remove floating style
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down => hide nav
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else {
      // Scrolling up => show nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP animation for slide in/out
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Toggle the mobile menu open/closed
  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      ref={navContainerRef}
      className="
        fixed top-0 left-0 right-0 z-50 
        h-16
        bg-[#181818] text-slate-200 
        transition-all duration-700
        sm:mx-6 sm:rounded-md
      "
    >
      <header className="w-full h-full">
        <nav className="relative flex h-full items-center justify-between px-4 floating-nav">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-6">
            <Image
              src="/CIAF7 Logo-33.png"
              alt="logo"
              width={100}
              height={100}
              className="h-auto w-auto"
            />
          </div>

          {/* DESKTOP: Middle nav items + “Log In” button, hidden on small screens */}
          <div className="hidden md:flex items-center gap-6">
            {/* Nav items */}
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="
                  text-white 
                  hover:text-gray-300
                  transition-colors
                  font-medium
                "
              >
                {item}
              </a>
            ))}

            {/* “Log In” Button */}
            <ButtonHero
              id="product-button"
              title="Log In"
              rightIcon={<LogInIcon className="size-5" />}
              containerClass="
                bg-green-500 text-white 
                px-3 py-2 rounded-md 
                hover:bg-green-600 
                font-medium
              "
            />
            {/* Audio Toggle */}
            <button
              onClick={toggleAudioIndicator}
              className="flex items-center space-x-0.5"
              title="Toggle audio"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line bg-white", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>

          {/* MOBILE: Hamburger or X button (only visible below md) */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle} aria-label="Toggle Menu">
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6 text-white" />
              ) : (
                <MenuIcon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {mobileMenuOpen && (
            <div
              className="
                absolute top-16 inset-x-0 
                bg-[#181818] text-slate-200
                shadow-md
                md:hidden 
              "
            >
              <div className="flex flex-col gap-2 p-4">
                {/* “Log In” button for mobile */}
                <ButtonHero
                  id="mobile-product-button"
                  title="Log In"
                  rightIcon={<LogInIcon className="size-5" />}
                  containerClass="
                    bg-green-500 text-white 
                    px-3 py-2 rounded-md 
                    hover:bg-green-600 
                    font-medium
                  "
                />

                {/* Nav items */}
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="
                      block
                      text-white 
                      hover:text-gray-300
                      transition-colors
                      font-medium
                    "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}

                <hr className="my-2 border-slate-600" />

                {/* Audio Toggle for mobile */}
                <button
                  onClick={toggleAudioIndicator}
                  className="flex items-center space-x-0.5"
                  title="Toggle audio"
                >
                  <audio
                    ref={audioElementRef}
                    className="hidden"
                    src="/audio/loop.mp3"
                    loop
                  />
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={clsx("indicator-line bg-white", {
                        active: isIndicatorActive,
                      })}
                      style={{
                        animationDelay: `${bar * 0.1}s`,
                      }}
                    />
                  ))}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
