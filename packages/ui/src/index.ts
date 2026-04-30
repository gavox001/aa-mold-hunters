/**
 * Aamold Hunter UI Components
 *
 * Shared UI component library for the monorepo.
 * Built with Tailwind CSS v4, Radix UI, and class-variance-authority.
 */

// ============================================================================
// Utilities
// ============================================================================

export { cn } from "./lib/utils";

// ============================================================================
// Components
// ============================================================================

// Button
export {
  Button,
  buttonVariants,
  type ButtonProps,
} from "./components/button";

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/card";

// Input
export {
  Input,
  type InputProps,
} from "./components/input";

// Label
export {
  Label,
  type LabelProps,
} from "./components/label";

// Form
export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
  type FormProps,
  type FormFieldProps,
  type FormItemProps,
  type FormLabelProps,
  type FormControlProps,
  type FormDescriptionProps,
  type FormMessageProps,
  type FormFieldContextValue,
  type FormItemContextValue,
} from "./components/form";

// ============================================================================
// Version
// ============================================================================

export const version = "0.0.1";
