
import { useLanguage } from "@/providers/LanguageProvider";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarNav = ({ className, ...props }: SidebarNavProps) => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/institutions', label: t('institutions') },
    { href: '/exam-results', label: t('examResults') },
    { href: '/baccalaureate-results', label: t('baccalaureateResults') },
    { href: '/application-guidance', label: t('applicationGuidance') },
    { href: '/archive', label: t('archive') },
    { href: '/institutions-guide', label: t('institutionsGuide') },
    { href: '/cultural-sport-season', label: t('culturalSportSeason') },
    { href: '/whatsapp-groups', label: t('whatsappGroups') },
  ];

  return (
    <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
      <nav className="grid gap-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === item.href
                ? "bg-ugem-yellow text-black"
                : "text-muted-foreground hover:bg-ugem-yellow/10 hover:text-ugem-yellow"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;
