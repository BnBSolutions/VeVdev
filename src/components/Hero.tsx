import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">{t("hero.welcome")}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t("hero.title")}{" "}
              <span className="gradient-text">{t("hero.titleHighlight")}</span> {t("hero.titleEnd")}
            </h1>

            <p className="text-lg text-foreground/70 max-w-xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow group"
              >
                {t("hero.getStarted")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5"
              >
                {t("hero.seeProjects")}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-foreground/60">{t("hero.projectsDelivered")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-foreground/60">{t("hero.yearsOnMarket")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">22</div>
                <div className="text-sm text-foreground/60">{t("hero.happyClients")}</div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden glow">
              <img
                src={heroIllustration}
                alt="Digital Solutions"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
