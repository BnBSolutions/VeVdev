import { Code2, Palette, Rocket, Shield, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t("services.uiux.title"),
      description: t("services.uiux.description"),
    },
    {
      icon: Code2,
      title: t("services.frontend.title"),
      description: t("services.frontend.description"),
    },
    {
      icon: Shield,
      title: t("services.backend.title"),
      description: t("services.backend.description"),
    },
    {
      icon: Rocket,
      title: t("services.delivery.title"),
      description: t("services.delivery.description"),
    },
    {
      icon: Zap,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.description"),
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("services.title")} <span className="gradient-text">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="glass border-white/10 hover:border-white/20 transition-all duration-300 group hover:glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
