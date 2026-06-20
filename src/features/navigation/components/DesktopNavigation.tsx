import Link from "next/link";
import { navigationItems } from "@/features/navigation/config/navigation";

export function DesktopNavigation() {
  return (
    <nav
      className="hidden items-center gap-1 md:flex"
      aria-label="Primary navigation"
    >
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
