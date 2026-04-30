"use client";

import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Lock,
  Clock,
  Star,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyType: z.string(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const trustSignals = [
  { icon: Shield, text: "100% Insurance Approved" },
  { icon: Lock, text: "Your info is secure" },
  { icon: Clock, text: "Response within 1 hour" },
  { icon: Star, text: "4.9/5 from 2,300+ reviews" },
];

export function FreeInspectionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "house",
      message: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 bg-tech-navy relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-eco-primary/5 via-transparent to-eco-primary/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full gradient-eco flex items-center justify-center mx-auto mb-6 glow-eco">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-white/60 mb-8">
              Your request has been received. Our team will contact you within 1
              hour to schedule your free inspection.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                reset();
              }}
              className="bg-eco-primary hover:bg-eco-primary-hover text-white font-bold px-8"
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-tech-navy relative overflow-hidden"
    >
      {/* Gradient glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-eco-primary/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-eco-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left - Trust sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get Your{" "}
                <span className="text-gradient-eco">FREE</span> Mold
                Inspection
              </h2>
              <p className="text-white/60 leading-relaxed">
                Join 2,300+ South Florida families who trust AA Mold Hunters to
                protect their homes. Our certified technicians use advanced
                thermal imaging to detect hidden mold.
              </p>
            </div>

            {/* Trust signals */}
            <div className="space-y-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal.text}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass"
                >
                  <signal.icon className="w-5 h-5 text-eco-primary shrink-0" />
                  <span className="text-sm text-white/70 font-medium">
                    {signal.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card rounded-3xl p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="name" className="text-white/80 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-eco-primary/50 h-12"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-alert-amber">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-eco-primary/50 h-12"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-alert-amber">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/80 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-eco-primary/50 h-12"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-alert-amber">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Property Type */}
                <div className="sm:col-span-2 space-y-2">
                  <Label className="text-white/80 font-medium">
                    Property Type
                  </Label>
                  <Select
                    defaultValue="house"
                    onValueChange={(value) => setValue("propertyType", value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:ring-eco-primary/50">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">
                        Single Family House
                      </SelectItem>
                      <SelectItem value="apartment">
                        Apartment / Condo
                      </SelectItem>
                      <SelectItem value="commercial">
                        Commercial Property
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-white/80 font-medium"
                  >
                    Tell us about your situation{" "}
                    <span className="text-white/40">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Describe any visible mold, water damage, or health concerns..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-eco-primary/50 resize-none"
                    {...register("message")}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold text-white gradient-eco hover:opacity-90 transition-all duration-300 glow-eco rounded-xl group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      SCHEDULE FREE INSPECTION
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-4 text-xs text-center text-white/30">
                By submitting, you agree to be contacted by AA Mold Hunters. We
                respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
