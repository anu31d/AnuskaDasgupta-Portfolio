import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceTabProps {
  linkedinProfileText: string;
}

const experiences = [
  {
    role: 'Vice President',
    company: 'Intellects Club SRM Ramapuram',
    duration: 'Nov 2024 - Aug 2025',
    description: 'Leading the club to foster innovation, organize tech events like "Chatbot Alchemy" and "PromptKraft", and mentor members in technical and leadership skills.'
  },
  {
    role: 'Lead of Technical & Innovation Domain',
    company: 'Intellects Club SRM Ramapuram',
    duration: 'Aug 2024 - Nov 2024',
    description: 'Headed the technical domain, driving project development and managing innovation-focused workshops.'
  },
  {
    role: 'Member of Technical and Innovation Domain',
    company: 'Intellects Club SRM Ramapuram',
    duration: 'Jan 2024 - Aug 2024',
    description: 'Actively contributed to technical projects and participated in innovation-focused activities within the club.'
  },
  {
    role: 'Discipline Core Committee Member',
    company: 'NSS Club SRM Ramapuram',
    duration: 'Sep 2023 - Present',
    description: 'Championing community engagement initiatives, organizing events, and upholding discipline within the club activities.'
  },
  {
    role: 'HR Intern',
    company: 'Free Pads for India',
    duration: 'Dec 2024 - Jan 2025',
    description: 'Contributed to a social impact initiative by refining organizational outreach strategies and assisting with HR responsibilities in a remote setting.'
  },
];

export function ExperienceTab({ linkedinProfileText }: ExperienceTabProps) {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Professional Journey</h2>
      <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative [perspective:1000px]">
            <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-accent animate-ping" style={{ animationDelay: `${index * 150 + 500}ms`, animationDuration: '2s' }} />
            <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-accent" />
            <Card className="bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 hover:scale-102 hover:rotate-x-2 [transform-style:preserve-3d]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  {exp.role}
                </CardTitle>
                <CardDescription className="pt-1">{exp.company} • {exp.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
