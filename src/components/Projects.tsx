import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured mobile shopping application with real-time inventory, secure payments, and seamless user experience.",
      type: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      technologies: ["React Native", "Firebase", "Stripe", "Redux"],
      status: "Completed",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform fitness application with workout plans, progress tracking, and social features for motivation.",
      type: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      technologies: ["Flutter", "Firebase", "Charts", "GPS"],
      status: "Completed",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: "Task Management Web App",
      description: "Modern web application for team collaboration with real-time updates, file sharing, and project tracking.",
      type: "Web",
      icon: <Globe className="w-5 h-5" />,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      status: "In Progress",
      gradient: "from-primary/20 to-accent/5"
    },
    {
      title: "Weather Dashboard",
      description: "Responsive web dashboard providing detailed weather analytics, forecasts, and location-based insights.",
      type: "Web",
      icon: <Globe className="w-5 h-5" />,
      technologies: ["Vue.js", "REST API", "Charts.js", "CSS3"],
      status: "Learning Project",
      gradient: "from-accent/20 to-primary/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-muted-foreground border-muted">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work spanning mobile applications and web development projects. 
              Each project represents a step in my journey towards full-stack mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                          <Badge 
                            variant={project.status === 'Completed' ? 'default' : 
                                   project.status === 'In Progress' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-muted/50 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group-hover:border-primary/50 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="flex-1 group-hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              More projects coming soon as I continue to expand my portfolio across mobile and web platforms.
            </p>
            <Button variant="hero" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;