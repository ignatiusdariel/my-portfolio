import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code2, Rocket, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Expert",
      description: "Specialized in creating intuitive mobile applications with performance and user experience at heart."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Code Quality",
      description: "Passionate about clean, maintainable code following best practices and modern development principles."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Rapidly expanding skillset into web development, always eager to adopt new technologies."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Analytical mindset focused on finding elegant solutions to complex technical challenges."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-muted-foreground border-muted">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-primary">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a dedicated mobile developer with a strong foundation in creating user-focused applications. 
              Currently expanding my expertise into web development to become a versatile full-stack developer. 
              My journey in IT has been driven by curiosity, continuous learning, and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started with mobile development, mastering the intricacies of creating seamless user experiences. 
                  Now embarking on the exciting journey of web development to expand my technical horizons.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-accent">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deepening my understanding of modern web technologies while maintaining excellence in mobile development. 
                  Building bridges between mobile and web experiences.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-primary">Future Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Becoming a versatile full-stack developer capable of creating comprehensive digital solutions 
                  from concept to deployment across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;