import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetRoot = SheetPrimitive.Root as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetTriggerPrimitive = SheetPrimitive.Trigger as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetClosePrimitive = SheetPrimitive.Close as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetPortalPrimitive = SheetPrimitive.Portal as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetOverlayPrimitive = SheetPrimitive.Overlay as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetContentPrimitive = SheetPrimitive.Content as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetTitlePrimitive = SheetPrimitive.Title as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SheetDescriptionPrimitive = SheetPrimitive.Description as any

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  modal?: boolean
  children?: React.ReactNode
}

function Sheet(props: SheetProps) {
  return <SheetRoot data-slot="sheet" {...props} />
}

interface SheetTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children?: React.ReactNode
  className?: string
}

function SheetTrigger(props: SheetTriggerProps) {
  return <SheetTriggerPrimitive data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: React.HTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode; className?: string }) {
  return <SheetClosePrimitive data-slot="sheet-close" {...props} />
}

function SheetPortal(props: { children?: React.ReactNode }) {
  return <SheetPortalPrimitive data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return (
    <SheetOverlayPrimitive
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({ className, children, side = "right", ...props }: React.HTMLAttributes<HTMLDivElement> & { className?: string; children?: React.ReactNode; side?: "top" | "right" | "bottom" | "left" }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetContentPrimitive
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetClosePrimitive className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </SheetClosePrimitive>
      </SheetContentPrimitive>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { className?: string; children?: React.ReactNode }) {
  return (
    <SheetTitlePrimitive
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    >
      {children}
    </SheetTitlePrimitive>
  )
}

function SheetDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { className?: string; children?: React.ReactNode }) {
  return (
    <SheetDescriptionPrimitive
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </SheetDescriptionPrimitive>
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
