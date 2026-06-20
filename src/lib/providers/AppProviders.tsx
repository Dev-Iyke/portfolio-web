"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
// import { store } from "@/redux/store";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      {/* <Provider store={store}> */}
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      {/* </Provider> */}
    </ReactQueryProvider>
  );
}
