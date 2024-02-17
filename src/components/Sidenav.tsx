import * as React from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface SideNavProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    VariantProps<typeof SideNavVariant> {}

const SideNavVariant = cva(
  "flex h-screen w-[200px] flex-col gap-1 bg-white text-black dark:bg-black dark:text-white relative transition-all overflow-x-hidden",
  {
    variants: {
      side: {
        left: "rounded-r-lg",
        right: "rounded-l-lg",
        bottom: "rounded-t-lg max-h-[200px] w-full ",
      },
      open: {
        true: "",
        false: "w-[0px]",
      },
    },
    defaultVariants: {
      side: "left",
      open: true,
    },
  },
);

const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  ({ className, children, side, open, ...props }, ref) => {
    return (
      <nav
        className={cn(SideNavVariant({ side, className, open }))}
        ref={ref}
        {...props}
      >
        {children}
      </nav>
    );
  },
);

SideNav.displayName = "SideNav";

export { SideNav };
