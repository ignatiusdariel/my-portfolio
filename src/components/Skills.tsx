import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Globe, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      color: "text-primary",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "iOS (Swift)", level: 80 },
        { name: "Android (Kotlin)", level: 75 },
        { name: "Mobile UI/UX", level: 88 }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      color: "text-accent",
      skills: [
        { name: "React", level: 70 },
        { name: "TypeScript", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Node.js", level: 60 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Database",
      color: "text-primary",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "SQL", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "GraphQL", level: 65 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Others",
      color: "text-accent",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Testing", level: 80 },
        { name: "Agile", level: 85 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-muted-foreground border-muted">
              Technical Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and proficiency levels, 
              reflecting my journey from mobile development to full-stack capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/50"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Always learning and expanding my skill set. Currently focused on:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'Vue.js', 'Python', 'AWS', 'Microservices', 'DevOps'].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;