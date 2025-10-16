import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "StroyNews",
      category: "Branding, Design, Product, Development",
      description: t("portfolio.stroyNews"),
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "M2M",
      category: "Mobile, Design, Branding",
      description: t("portfolio.m2m"),
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "GrandShop",
      category: "Web, Development, Product",
      description: t("portfolio.grandShop"),
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "AgroData",
      category: "Design, Development, Product",
      description: t("portfolio.agroData"),
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "US Motors",
      category: "Web Development, Design",
      description: t("portfolio.usMotors"),
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      title: "Vredit.md",
      category: "Full Stack Development",
      description: t("portfolio.vredit"),
      gradient: "from-pink-600 to-rose-500",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("portfolio.title")} <span className="gradient-text">{t("portfolio.titleHighlight")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("portfolio.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass border-white/10 overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/80 mb-1">{project.description}</p>
                <p className="text-xs text-foreground/60">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
