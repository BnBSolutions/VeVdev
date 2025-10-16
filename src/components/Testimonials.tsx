import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "AgroData",
    role: "Agro-industrial auctions",
    content: "I would like to note the high professionalism, competence of your staff, the rapid introduction of changes and additions to our project, flexible approach and attention to our wishes. All work was carried out on time and in exact accordance with contractual obligations.",
    rating: 5,
  },
  {
    name: "US Motors",
    role: "Car dealers in the USA",
    content: "We like the professionalism and courteous attitude to clients, the initiative of proposals for design and the ability to fill the content of the site taking into account the wishes of the customer. Fast response in case of questions and problems.",
    rating: 5,
  },
  {
    name: "M2M",
    role: "Real Estate Sales Platform",
    content: "I had the opportunity to interact with the IT company Vev Dev, and I was very impressed with the way they conduct their business and the level of service they provide to their customers. Since the beginning of our collaboration, I have always been treated with professionalism and kindness.",
    rating: 5,
  },
  {
    name: "StroyNews",
    role: "Information platform",
    content: "Professionalism, creativity and initiative are the hallmarks of Vev Dev's work. We were very satisfied with the result. We are very pleased that in the face of Vev Dev company we found a reliable partner, with whom we have been working for 3 years.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("testimonials.title")} <span className="gradient-text">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="glass border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
