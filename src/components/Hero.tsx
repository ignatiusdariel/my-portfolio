import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Code, Smartphone, Globe } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 md:px-12 text-left">
        <div className="max-w-4xl animate-fade-in">
          <Badge variant="outline" className="mb-6 text-muted-foreground border-muted bg-card/50 backdrop-blur-sm">
            <Code className="w-4 h-4 mr-2" />
            Available for opportunities
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            Mobile Developer
            <br />
            <span className="text-accent">Evolving to Full Stack</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Crafting exceptional mobile experiences and expanding into the world of web development. 
            Passionate about clean code, user-centric design, and cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-48">
              View My Work
            </Button>
            <Button variant="accent" size="lg" className="min-w-48">
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-wrap justify-start gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>Mobile Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span>Clean Code</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;