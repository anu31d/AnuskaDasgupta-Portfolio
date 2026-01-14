import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

interface ProjectsTabProps {
  linkedinProfileText: string;
}

const projects = [
    {
        name: 'Ruhi: Personal & Virtual Mental Health Chatbot Assistant',
        association: 'SRM University',
        duration: 'Dec 2024 - Jan 2025',
        description: 'Ruhi is an AI-powered mental health chatbot addressing the growing mental health crisis characterized by rising stress, anxiety, and limited access to timely, affordable support. The stigma around seeking help often prevents individuals from reaching out. Ruhi provides a solution by offering 24/7 accessible, non-judgmental support, promoting mindfulness, emotional well-being, and stress management. Built using advanced NLP tools, it integrates guided sessions, mental health resources, and user-centric design while ensuring privacy and confidentiality. Positive feedback highlights its empathy and ease of use. Future goals include multilingual support, voice and wearable integrations, and tailored therapy programs. Ruhi bridges the mental health service gap, reduces stigma, and empowers individuals, fostering a healthier, more inclusive society for better well-being.',
        skills: ['Python', 'Natural Language Processing (NLP)', 'AI', 'Chatbot Development', 'Voice AI', 'UI/UX']
    }
]

export function ProjectsTab({ linkedinProfileText }: ProjectsTabProps) {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
             <div key={index} className="[perspective:1000px]">
                <Card className="bg-card border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 hover:scale-102 hover:rotate-x-2 [transform-style:preserve-3d]">
                    <CardHeader className="bg-secondary">
                         <CardTitle className="flex items-center gap-3 font-headline text-xl">
                             <Lightbulb className="w-6 h-6 text-primary"/>
                             {project.name}
                         </CardTitle>
                         <CardDescription>{project.association} • {project.duration}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="mb-4 text-foreground/90">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map(skill => (
                                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
             </div>
        ))}
      </div>
    </div>
  );
}
