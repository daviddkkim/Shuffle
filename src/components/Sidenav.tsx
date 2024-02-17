import * as React from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface SideNavProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    VariantProps<typeof SideNavVariant> {
  side: "left" | "right" | "bottom";
}

const SideNavVariant = cva(
  "flex h-screen w-[200px] flex-col gap-1 bg-white text-black dark:bg-black dark:text-white",
  {
    variants: {
      side: {
        left: "rounded-r-lg",
        right: "rounded-l-lg",
        bottom: "rounded-t-lg max-h-[200px] w-full ",
      },
    },
  },
);

const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  ({ className, children, side, ...props }, ref) => {
    return (
      <nav
        className={cn(SideNavVariant({ side, className }))}
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
