
import { useLanguage } from "@/providers/LanguageProvider";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
