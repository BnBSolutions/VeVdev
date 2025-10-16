import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold gradient-text">Vev Dev</span>
            </div>
            <p className="text-foreground/60 text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#services" className="hover:text-foreground transition-colors">{t("footer.webDev")}</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">{t("footer.design")}</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">{t("footer.mobile")}</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">{t("footer.marketing")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#about" className="hover:text-foreground transition-colors">{t("footer.about")}</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">{t("footer.portfolio")}</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">{t("footer.contact")}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t("footer.careers")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.connect")}</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Vev Dev. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
