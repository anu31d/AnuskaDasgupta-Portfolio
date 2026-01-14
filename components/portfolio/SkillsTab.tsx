import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, MessageSquare, Wrench } from 'lucide-react';

interface SkillsTabProps {
  linkedinProfileText: string;
}

const skillCategories = [
    {
        title: 'Technical Skills',
        icon: Cpu,
        skills: [
            'Python', 'JavaScript', 'Java', 'C', 'HTML', 'Full-Stack Development', 'Web Development',
            'Artificial Intelligence (AI)', 'Generative AI', 'Deep Learning', 'Data Science',
            'Large Language Models (LLM)', 'Natural Language Processing (NLP)', 'Computer Vision',
            'Chatbot Development', 'BERT', 'GPT-2'
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: Wrench,
        skills: ['Google Cloud', 'Microsoft Copilot', 'NVIDIA Ecosystem', 'Hugging Face', 'Git', 'GitHub', 'VS Code']
    },
    {
        title: 'Soft Skills & Leadership',
        icon: MessageSquare,
        skills: [
            'Leadership', 'Public Speaking', 'Oratory', 'Communication', 'Event Management', 'Teamwork',
            'Mentorship', 'Interpersonal Skills', 'Problem Solving', 'Time Management', 'German'
        ]
    }
]

export function SkillsTab({ linkedinProfileText }: SkillsTabProps) {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills & Proficiencies</h2>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
            <div key={index} className="[perspective:1000px]">
                <Card className="bg-card border-border transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 hover:scale-102 hover:rotate-x-2 [transform-style:preserve-3d]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-xl text-accent">
                            <category.icon className="w-6 h-6"/>
                            {category.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                                 <Badge key={skill} variant="outline" className="text-lg px-4 py-2 border-accent/30 text-foreground/90 bg-accent/10 hover:bg-accent/20 transition-all duration-200 cursor-pointer hover:-translate-y-0.5">
                                    {skill}
                                 </Badge>
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
