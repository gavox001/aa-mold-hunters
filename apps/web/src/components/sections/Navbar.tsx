"use client";

import { useState, useEffect } from "react";
import {
  PhoneCall,
  ShieldCheck,
  Star,
  ChevronDown,
  Droplets,
  Bug,
  Home,
  Package,
  Wind,
  ThermometerSun,
  CheckCircle2,
} from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  {
    title: "Water Mitigation",
    href: "#services",
    description: "Fast extraction and drying to stop structural damage.",
    icon: Droplets,
  },
  {
    title: "Mold Remediation",
    href: "#services",
    description: "Certified containment and safe mold removal protocols.",
    icon: Bug,
  },
  {
    title: "Roof Protection",
    href: "#services",
    description: "Emergency roof stabilization to prevent further ingress.",
    icon: Home,
  },
  {
    title: "Shrinkwrap & Tarps",
    href: "#services",
    description: "Rapid temporary shielding against storms and leaks.",
    icon: Package,
  },
  {
    title: "Air Quality Testing",
    href: "#services",
    description: "Objective indoor air readings for health-safe decisions.",
    icon: Wind,
  },
  {
    title: "Thermal Imaging",
    href: "#services",
    description: "Detect hidden moisture before mold spreads behind walls.",
    icon: ThermometerSun,
  },
];

const certifications = ["IICRC Certified", "BBB A+", "FL Licensed"];
const observedSections = ["services", "process", "testimonials", "faq", "contact"];

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5">
      <span
        className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const sections = observedSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveSection(id);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const featuredServices = services.filter(
    (service) =>
      service.title === "Mold Remediation" || service.title === "Water Mitigation"
  );
  const secondaryServices = services.filter(
    (service) =>
      service.title !== "Mold Remediation" && service.title !== "Water Mitigation"
  );
  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-9 sm:top-10 z-50 w-full px-2 sm:px-4"
    >
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-4xl rounded-2xl border border-eco-primary/15 dark:border-border/50 bg-background/75 dark:bg-background/85 backdrop-blur-2xl shadow-xl shadow-eco-primary/5 mt-2"
            : "max-w-[1440px] rounded-none border border-transparent bg-background/65 backdrop-blur-xl"
        }`}
      >
        <div
          className={`flex items-center gap-2 sm:gap-3 transition-all duration-500 ${
            scrolled
              ? "h-14 sm:h-16 px-3 sm:px-4 md:px-6"
              : "h-16 sm:h-20 px-3 sm:px-4 md:px-8 lg:px-10"
          }`}
        >
          <div className="flex min-w-0 items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div
                className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-eco-primary to-eco-primary-hover shadow-lg shadow-eco-primary/30 transition-all duration-300 group-hover:shadow-eco-primary/50 ${
                  scrolled ? "h-8 w-8 sm:h-9 sm:w-9" : "h-9 w-9 sm:h-11 sm:w-11"
                }`}
              >
                <ShieldCheck className="h-5 w-5 text-white" />
                <span className="absolute inset-0 rounded-2xl ring-2 ring-eco-primary/20 group-hover:ring-eco-primary/40 transition-all duration-300" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm sm:text-base font-extrabold text-foreground uppercase tracking-tight leading-none">
                  AA Mold Hunters
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 ${
                    scrolled ? "opacity-0 h-0" : "opacity-100 h-auto mt-1"
                  }`}
                >
                  Licensed Experts
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-1 xl:gap-2">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent hover:bg-secondary/70 data-[state=open]:bg-secondary/80 text-xs font-bold uppercase tracking-[0.18em] px-3 ${
                      activeSection === "services"
                        ? "text-eco-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[min(620px,calc(100vw-2rem))] rounded-2xl border border-border bg-background/95 p-0 shadow-2xl backdrop-blur-xl">
                    <div className="p-4 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        {featuredServices.map((service) => {
                          const Icon = service.icon;
                          return (
                            <NavigationMenuLink asChild key={service.title}>
                              <Link
                                href={service.href}
                                className="rounded-xl border border-eco-primary/15 bg-eco-primary/5 p-3 hover:border-eco-primary/30 hover:bg-eco-primary/10 transition-colors"
                              >
                                <div className="mb-2 flex items-center gap-2">
                                  <div className="rounded-lg bg-eco-primary/15 p-1.5">
                                    <Icon className="h-4 w-4 text-eco-primary" />
                                  </div>
                                  <span className="text-sm font-bold text-foreground">
                                    {service.title}
                                  </span>
                                </div>
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {secondaryServices.map((service) => {
                          const Icon = service.icon;
                          return (
                            <NavigationMenuLink asChild key={service.title}>
                              <Link
                                href={service.href}
                                className="rounded-xl border border-transparent p-3 hover:border-eco-primary/20 hover:bg-secondary/50 transition-colors"
                              >
                                <div className="mb-2 flex items-center gap-2">
                                  <div className="rounded-lg bg-eco-primary/10 p-1.5">
                                    <Icon className="h-4 w-4 text-eco-primary" />
                                  </div>
                                  <span className="text-sm font-bold text-foreground">
                                    {service.title}
                                  </span>
                                </div>
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </div>
                    <Separator />
                    <div className="px-4 py-3">
                      <Link
                        href="#contact"
                        onClick={() => setActiveSection("contact")}
                        className="text-xs font-bold uppercase tracking-[0.18em] text-eco-primary hover:text-eco-primary-hover transition-colors"
                      >
                        Schedule a FREE inspection
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.href.replace("#", ""))}
                className={`px-2 xl:px-3 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                  isActive(item.href)
                    ? "text-eco-primary"
                    : "text-foreground/80 hover:text-eco-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <div
              className={`hidden lg:flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-1.5 transition-all duration-300 ${
                scrolled ? "opacity-0 w-0 overflow-hidden px-0 py-0 border-transparent" : "opacity-100"
              }`}
            >
              <Star className="h-3.5 w-3.5 text-alert-amber" />
              <span className="text-xs font-semibold text-foreground/80">4.9</span>
              <span className="hidden xl:inline text-xs text-muted-foreground">
                | 2,300+ reviews
              </span>
            </div>

            <a
              href="tel:+18004586893"
              className="hidden lg:flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2 hover:bg-secondary transition-colors"
              aria-label="Call 24/7 support"
            >
              <PhoneCall className="h-3.5 w-3.5 text-eco-primary" />
              <span className="hidden xl:inline text-xs font-bold text-foreground/70">
                24/7
              </span>
              <span className="text-xs font-bold text-foreground">(800) 458-6893</span>
            </a>

            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-eco-primary hover:bg-eco-primary-hover text-white font-bold shadow-lg shadow-eco-primary/30 hover:shadow-eco-primary/50"
              >
                <Link
                  href="#contact"
                  onClick={() => setActiveSection("contact")}
                  className="inline-flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  Request Inspection
                </Link>
              </Button>
            </div>

            <div className="hidden lg:flex items-center gap-1 border-l border-border pl-2 sm:pl-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-border bg-background/60 hover:bg-secondary"
                  aria-label={sheetOpen ? "Close menu" : "Open menu"}
                >
                  <MenuToggleIcon open={sheetOpen} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[360px] max-w-[92vw] border-l border-border bg-background/95 backdrop-blur-2xl"
              >
                <SheetHeader className="pb-4">
                  <SheetTitle className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-primary to-eco-primary-hover shadow-lg shadow-eco-primary/30">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-base font-extrabold uppercase tracking-tight text-foreground">
                        AA Mold Hunters
                      </span>
                      <span className="rounded-full border border-eco-primary/20 bg-eco-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-eco-primary">
                        Licensed & Insured
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex h-full flex-col gap-5 pb-6">
                  <div className="space-y-1">
                    {navLinks.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveSection(item.href.replace("#", ""))}
                          className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                            isActive(item.href)
                              ? "text-eco-primary bg-eco-primary/10"
                              : "text-foreground hover:text-eco-primary hover:bg-secondary/50"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <Separator />

                  <details className="group rounded-2xl border border-border bg-secondary/40 p-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-foreground">
                      Services
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-3 grid gap-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <SheetClose asChild key={service.title}>
                            <Link
                              href={service.href}
                              onClick={() => setActiveSection(service.href.replace("#", ""))}
                              className="rounded-xl border border-border/70 bg-secondary/40 px-3 py-2.5 hover:border-eco-primary/30 hover:bg-secondary/70 transition-colors"
                            >
                              <div className="mb-1 flex items-center gap-2">
                                <Icon className="h-4 w-4 text-eco-primary" />
                                <span className="text-sm font-bold text-foreground">
                                  {service.title}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {service.description}
                              </p>
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </details>

                  <Separator />

                  <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Trust Signals
                    </p>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Star className="h-4 w-4 text-alert-amber" />
                      <span>4.9 rating</span>
                      <span className="text-muted-foreground">| 2,300+ reviews</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {certifications.map((cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center gap-1 rounded-full border border-eco-primary/20 bg-eco-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-eco-primary"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-eco-primary/30 bg-gradient-to-br from-eco-primary/15 to-eco-primary/5 p-4 shadow-lg shadow-eco-primary/15">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-eco-primary-dark">
                      Emergency Line
                    </p>
                    <a
                      href="tel:+18004586893"
                      className="inline-flex items-center gap-2 text-xl font-extrabold text-foreground"
                    >
                      <PhoneCall className="h-5 w-5 text-eco-primary" />
                      (800) 458-6893
                    </a>
                  </div>

                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-eco-primary hover:bg-eco-primary-hover text-white font-bold shadow-lg shadow-eco-primary/30"
                    >
                      <Link
                        href="#contact"
                        onClick={() => setActiveSection("contact")}
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                        Request Inspection
                      </Link>
                    </Button>
                  </SheetClose>

                  <div className="mt-auto flex items-center justify-between rounded-xl border border-border bg-secondary/40 p-2">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <span className="text-xs font-semibold text-muted-foreground">
                      {activeSection ? `Active: ${activeSection}` : "Navigation"}
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
