import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationTabProps {
  linkedinProfileText: string;
}

const education = [
    {
        institution: 'SRM IST Chennai',
        degree: 'Bachelor of Technology - BTech, Computer Science',
        duration: 'Aug 2023 - Aug 2027',
        details: 'Activities and societies: Member @NSS Club, Member @INTELLECTS Club. Skills: Interpersonal Skills, Event Management, and more.'
    },
    {
        institution: 'DAV Schools Network',
        degree: 'High School Education',
        duration: '',
        details: 'Developed foundational skills in various subjects and extracurriculars.'
    }
]

export function EducationTab({ linkedinProfileText }: EducationTabProps) {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
             <div key={index} className="[perspective:1000px] h-full">
                <Card className="bg-card h-full hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 hover:scale-102 hover:rotate-x-2 [transform-style:preserve-3d] flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="bg-primary/20 p-3 rounded-full">
                                <GraduationCap className="w-8 h-8 text-primary"/>
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{edu.institution}</CardTitle>
                                <CardDescription>{edu.degree}</CardDescription>
                            </div>
                        </div>
                         {edu.duration && <p className="text-sm text-muted-foreground">{edu.duration}</p>}
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-foreground/90">{edu.details}</p>
                    </CardContent>
                </Card>
             </div>
        ))}
      </div>
    </div>
  );
}
