"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/Wrapper/theme-toggle"; ;
import { cn } from "@/lib/utils";
// import logo from '../../public/image/logo/nobg_logo.png';

import logo from '../../public/image/logo/nobg_logo.png'
// Navigation items - Your 5 main sections
const navigationItems = [
  {
    title: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    title: "Services",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { title: "AI & ML Solutions", href: "/services/ai-ml" },
      { title: "Enterprise Platforms (ERP/EHR)", href: "/services/erp" },
      { title: "IoT & Smart Infrastructure", href: "/services/iot" },
      { title: "Cloud & Digital Infrastructure", href: "/services/cloud" },
      { title: "Custom Software Development", href: "/services/custom-software" },
    ],
  },
  {
    title: "Solutions",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { title: "For Healthcare", href: "/solutions/healthcare" },
      { title: "For Manufacturing", href: "/solutions/manufacturing" },
      { title: "For E-commerce", href: "/solutions/ecommerce" },
      { title: "For Education", href: "/solutions/education" },
    ],
  },
  {
    title: "Company",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { title: "About Us", href: "/about" },
      { title: "Our Team", href: "/team" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Documentation", href: "/docs" },
      { title: "Support", href: "/support" },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={cn(
        "transition-all duration-300",
        // scrolled ? "h-24" : "h-20 md:h-24"
      )} />
      
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled 
            ? "top-3 md:top-4 mx-4 md:mx-24 rounded-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border shadow-lg" 
            : "top-0 mx-0 md:mx-12 bg-transparent border-transparent"
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-300",
            scrolled ? "h-14 md:h-16" : "h-20 md:h-24"
          )}
        >
          <Link href="/" className="flex items-center space-x-2 transition-all duration-300">
     <span
  className={cn(
    "font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300 flex items-center gap-2",
    scrolled ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
  )}
>
  <Image 
    src={logo} 
    width={45} 
    height={45} 
    alt="Company Logo" 
    className="object-contain"
  />
  Nexvista
</span>
            <span
              className={cn(
                "hidden sm:inline text-muted-foreground transition-all duration-300",
                scrolled ? "text-xs md:text-sm" : "text-base md:text-lg"
              )}
            >
              {/* Systems */}
            </span>
          </Link>

  

          {/* Desktop Navigation - Shows on medium screens and above */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className={cn(
                          "transition-all cursor-pointer duration-300",
                          scrolled ? "text-md" : "text-base"
                        )}>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <li key={dropdownItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={dropdownItem.href}
                                    className="block select-none cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-md font-medium leading-none">
                                      {dropdownItem.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            scrolled ? "text-sm bg-transparent" : "text-base bg-transparent"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Dropdown - Optional, shows when logged in */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "relative rounded-md transition-all duration-300",
                  scrolled ? "h-7 w-7 md:h-8 md:w-8" : "h-9 w-9 md:h-10 md:w-10"
                )}>
                  <Avatar className={cn(
                    "transition-all cursor-pointer duration-300",
                    scrolled ? "h-7 w-7 md:h-8 md:w-8" : "h-9 w-9 md:h-10 md:w-10"
                  )}>
                    <AvatarImage src="/avatars/01.png" alt="User" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Amarjeet Kumar</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      amarjeet@amrutcoresystems.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Get Started Button - changes size on scroll */}
            <Button 
              className={cn(
                "hidden md:inline-flex transition-all duration-300 font-medium",
                scrolled 
                  ? "h-8 px-3 lg:h-9 lg:px-4 text-xs rounded-sm lg:text-sm" 
                  : "h-10 px-5 lg:h-11 lg:px-6 rounded-sm text-sm lg:text-base"
              )}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      {item.hasDropdown ? (
                        <div className="flex flex-col gap-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.title}
                          </span>
                          <div className="ml-4 flex flex-col gap-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.title}
                                href={dropdownItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm hover:text-primary transition-colors"
                              >
                                {dropdownItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm font-medium hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      )}
                      {item.title !== navigationItems[navigationItems.length - 1].title && (
                        <div className="my-4 h-px bg-border" />
                      )}
                    </div>
                  ))}
                  <div className="my-4 h-px bg-border" />
                  <Button className="w-full">Get Started</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}