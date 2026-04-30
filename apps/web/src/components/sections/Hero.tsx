"use client";

import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  Users,
  Zap,
  ThermometerSun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Animated counter hook
function useCounter(target: number, duration = 2, delay = 0.5) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration,
      delay,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(obj.val)),
    });
    return () => { tween.kill(); };
  }, [target, duration, delay]);

  return { count, ref };
}

const trustBadges = [
  { icon: Star, text: "4.9/5 (2,300+ Reviews)", color: "text-alert-amber" },
  { icon: Shield, text: "Licensed & Insured", color: "text-eco-primary" },
  { icon: Clock, text: "24/7 Emergency Response", color: "text-eco-primary" },
  { icon: CheckCircle, text: "100% Insurance Approved", color: "text-eco-primary" },
];

function StatCard({
  icon: Icon,
  value,
  label,
  suffix = "",
  delay = 0,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const { count } = useCounter(value, 2, delay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.8 }}
      className="flex flex-col items-center justify-center p-4 rounded-2xl glass-card hover:scale-105 transition-transform duration-300 cursor-default"
    >
      <Icon className="w-5 h-5 text-eco-primary mb-2" />
      <span className="text-2xl font-bold text-white tracking-tight">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium mt-1">
        {label}
      </span>
    </motion.div>
  );
}

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  } as const;

  return (
    <section className="relative min-h-[90vh] flex items-end pb-12 pt-32 overflow-hidden">
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-florida-family.png"
          alt="Florida family in their protected home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-navy via-tech-navy/60 to-tech-navy/30" />
        {/* Subtle green glow at bottom */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-eco-primary/10 blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column - Main Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-semibold text-white/90">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-eco-primary" />
                </span>
                Trusted by 2,300+ Florida Families
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-display font-extrabold text-white"
            >
              <span className="text-gradient-eco">Hidden Mold</span> is
              Destroying Your Home
              <br />
              <span className="bg-gradient-to-r from-alert-amber to-alert-amber-hover bg-clip-text text-transparent">
                FREE Thermal Inspection
              </span>{" "}
              Reveals It
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              South Florida&apos;s leading mold detection experts. We use
              advanced thermal imaging to find hidden mold before it damages
              your home and health.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-white gradient-eco rounded-xl hover:opacity-90 transition-all duration-300 glow-eco hover:-translate-y-0.5"
              >
                Claim Your FREE Inspection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#qualification"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold glass-card text-white hover:bg-white/10 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                (800) 458-6893
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-5 gap-y-3 py-4 mt-2 border-t border-white/10"
            >
              {trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white/90 transition-colors"
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Glass Stats Cards */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative rounded-3xl glass-card p-6 space-y-5"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-eco-primary/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-eco-primary/20 ring-1 ring-eco-primary/30">
                    <Shield className="h-5 w-5 text-eco-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Community Protection
                    </p>
                    <p className="text-xs text-white/50">
                      South Florida Network
                    </p>
                  </div>
                  <div className="ml-auto inline-flex items-center gap-1.5 rounded-full glass px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-eco-primary" />
                    </span>
                    <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <StatCard
                    icon={Users}
                    value={2300}
                    suffix="+"
                    label="Homes Protected"
                    delay={0}
                  />
                  <StatCard
                    icon={Star}
                    value={49}
                    suffix=""
                    label="Rating (4.9/5)"
                    delay={0.15}
                  />
                  <StatCard
                    icon={Zap}
                    value={1}
                    suffix="hr"
                    label="Response Time"
                    delay={0.3}
                  />
                  <StatCard
                    icon={ThermometerSun}
                    value={100}
                    suffix="%"
                    label="Detection Rate"
                    delay={0.45}
                  />
                </div>

                {/* Satisfaction bar */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Client Satisfaction</span>
                    <span className="text-white font-semibold">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full gradient-eco"
                      initial={{ width: "0%" }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["IICRC Certified", "BBB A+", "FL Licensed"].map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[10px] font-medium tracking-wide text-white/70"
                    >
                      <CheckCircle className="w-3 h-3 text-eco-primary" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
