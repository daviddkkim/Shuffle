import * as React from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface PanelProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof PanelVariant> {}

const PanelVariant = cva(
  "flex shadow-sm h-screen w-[200px] flex-col gap-1 bg-white text-black dark:bg-black dark:text-white relative transition-all overflow-x-hidden p-2",
  {
    variants: {
      side: {
        left: "rounded-r-lg",
        right: "rounded-l-lg",
        bottom: "rounded-t-lg max-h-[200px] w-full ",
      },
      open: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        side: "bottom",
        open: false,
        className: " h-[0px] p-0",
      },
      {
        side: "left",
        open: false,
        className: "w-[0px] p-0",
      },
      {
        side: "right",
        open: false,
        className: "w-[0px] p-0",
      },
    ],
    defaultVariants: {
      side: "left",
      open: true,
    },
  },
);

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, children, side, open, ...props }, ref) => {
    return (
      <div
        className={cn(PanelVariant({ side, className, open }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Panel.displayName = "Panel";

export { Panel };
