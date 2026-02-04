import { SidebarHeader } from '@/components/ui/sidebar';
import { Cpu } from 'lucide-react';

export default function SidebarCustomHeader({ open }: { open: boolean }) {
  return (
    <SidebarHeader className="border-b border-sidebar-border/50 px-4 py-5 group-data-[collapsible=icon]:px-0">
      <div className="flex items-center gap-3 transition-all duration-200 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-white shadow-md ring-1 ring-white/10">
          <Cpu className="h-5 w-5" />
        </div>
        <div
          className={`flex flex-col transition-all duration-200 ${
            open
              ? 'translate-x-0 opacity-100'
              : 'pointer-events-none -translate-x-2 opacity-0 w-0'
          }`}
        >
          <span className="whitespace-nowrap text-sm font-bold tracking-tight text-sidebar-foreground">
            Qualtech
          </span>
          <span className="whitespace-nowrap text-xs font-medium text-sidebar-foreground/60">
            Engineering
          </span>
        </div>
      </div>
    </SidebarHeader>
  );
}
