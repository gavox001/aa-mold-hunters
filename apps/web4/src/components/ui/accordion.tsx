import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionRoot = AccordionPrimitive.Root as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionItemPrimitive = AccordionPrimitive.Item as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionHeader = AccordionPrimitive.Header as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionTriggerPrimitive = AccordionPrimitive.Trigger as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionContentPrimitive = AccordionPrimitive.Content as any

function Accordion({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode; className?: string; type: "single" | "multiple"; collapsible?: boolean; defaultValue?: string; value?: string; onValueChange?: (value: string) => void }) {
  return <AccordionRoot data-slot="accordion" className={className} {...props}>{children}</AccordionRoot>
}

function AccordionItem({
  className,
  children,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string; children?: React.ReactNode; value: string }) {
  return (
    <AccordionItemPrimitive
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      value={value}
      {...props}
    >
      {children}
    </AccordionItemPrimitive>
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { className?: string; children?: React.ReactNode }) {
  return (
    <AccordionHeader className="flex">
      <AccordionTriggerPrimitive
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:text-primary focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionTriggerPrimitive>
    </AccordionHeader>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string; children?: React.ReactNode }) {
  return (
    <AccordionContentPrimitive
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionContentPrimitive>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
