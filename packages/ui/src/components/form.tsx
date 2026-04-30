import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../lib/utils";
import { Label } from "./label";

// ============================================================================
// Types & Interfaces
// ============================================================================

/**
 * Form field context value
 */
interface FormFieldContextValue {
  name: string;
  error?: string;
  isRequired?: boolean;
}

/**
 * Form item context value
 */
interface FormItemContextValue {
  id: string;
}

// ============================================================================
// Contexts
// ============================================================================

const FormFieldContext = React.createContext<FormFieldContextValue | null>(
  null
);

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

// ============================================================================
// Hooks
// ============================================================================

/**
 * Hook to access form field context
 * Must be used within a FormField component
 */
function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  if (!fieldContext) {
    throw new Error("useFormField must be used within a FormField");
  }

  if (!itemContext) {
    throw new Error("useFormField must be used within a FormItem");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    error: fieldContext.error,
    isRequired: fieldContext.isRequired,
  };
}

// ============================================================================
// Components
// ============================================================================

/**
 * Form component props
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  errors?: Record<string, string>;
}

/**
 * Form component - Root form container with error handling context
 */
const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, errors = {}, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("space-y-6", className)}
        {...props}
      />
    );
  }
);

Form.displayName = "Form";

/**
 * FormField component props
 */
export interface FormFieldProps {
  name: string;
  error?: string;
  isRequired?: boolean;
  children: React.ReactNode;
}

/**
 * FormField component - Context provider for individual form fields
 * Manages field state and error handling
 */
function FormField({
  name,
  error,
  isRequired,
  children,
}: FormFieldProps) {
  return (
    <FormFieldContext.Provider value={{ name, error, isRequired }}>
      {children}
    </FormFieldContext.Provider>
  );
}

/**
 * FormItem component props
 */
export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * FormItem component - Container for a single form field
 * Provides unique ID generation for accessibility
 */
const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div
          ref={ref}
          className={cn("space-y-2", className)}
          {...props}
        />
      </FormItemContext.Provider>
    );
  }
);

FormItem.displayName = "FormItem";

/**
 * FormLabel component props
 */
export interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

/**
 * FormLabel component - Label specifically for form fields
 * Automatically associates with the field and shows required indicator
 */
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, children, ...props }, ref) => {
  const { error, formItemId, isRequired } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(
        error && "text-[var(--color-destructive)]",
        "flex items-center gap-1",
        className
      )}
      htmlFor={formItemId}
      {...props}
    >
      {children}
      {isRequired && (
        <span className="text-[var(--color-destructive)]" aria-hidden="true">
          *
        </span>
      )}
    </Label>
  );
});

FormLabel.displayName = "FormLabel";

/**
 * FormControl component props
 */
export interface FormControlProps
  extends React.ComponentPropsWithoutRef<typeof Slot> {}

/**
 * FormControl component - Wrapper for form input elements
 * Provides accessibility attributes and error state
 */
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  FormControlProps
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      data-error={!!error}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

/**
 * FormDescription component props
 */
export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * FormDescription component - Helper text for form fields
 */
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        "text-sm text-[var(--color-muted-foreground)]",
        className
      )}
      {...props}
    />
  );
});

FormDescription.displayName = "FormDescription";

/**
 * FormMessage component props
 */
export interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * FormMessage component - Error message display for form fields
 * Only renders when there's an error
 */
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  FormMessageProps
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn(
        "text-sm font-medium text-[var(--color-destructive)]",
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = "FormMessage";

// ============================================================================
// Exports
// ============================================================================

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
};

// Export types
export type { FormFieldContextValue, FormItemContextValue };
