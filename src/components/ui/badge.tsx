// src/components/ui/badge.tsx
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground border-input hover:bg-accent hover:text-accent-foreground',
        success:
          'border-transparent bg-green-500 text-white shadow hover:bg-green-600',
        warning:
          'border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-600',
        info:
          'border-transparent bg-blue-500 text-white shadow hover:bg-blue-600',
        gradient:
          'border-transparent bg-gradient-to-r from-primary to-red-600 text-white shadow-lg',
        glass:
          'border-gray-200/20 bg-white/10 text-foreground backdrop-blur-sm dark:border-gray-700/20 dark:bg-black/10',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };