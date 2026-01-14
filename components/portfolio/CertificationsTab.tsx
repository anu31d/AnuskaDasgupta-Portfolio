import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

interface CertificationsTabProps {
  linkedinProfileText: string;
}

const certifications = [
    {
        name: 'Benefits of using cloud service',
        issuer: 'Microsoft',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Computer Vision',
        issuer: 'Infosys Springboard',
        date: 'Issued Jun 2025'
    },
    {
        name: 'GenAI – LLMs & Hugging Face',
        issuer: 'Cuvette',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Introduction to AI',
        issuer: 'Infosys Springboard',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Introduction to Data Science',
        issuer: 'Infosys Springboard',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Introduction to Deep Learning',
        issuer: 'Infosys Springboard',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Introduction to Natural Language Processing',
        issuer: 'Infosys Springboard',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Time Management',
        issuer: 'Infosys Springboard',
        date: 'Issued Jun 2025'
    },
    {
        name: 'Types of Cloud Service',
        issuer: 'Microsoft',
        date: 'Issued May 2025'
    },
    {
        name: 'Microsoft Copilot',
        issuer: 'Microsoft',
        date: 'Issued Apr 2025'
    },
    {
        name: 'Fundamental AI Concepts',
        issuer: 'Microsoft',
        date: 'Issued Mar 2025'
    },
    {
        name: 'Introduction to Python',
        issuer: 'Coddy',
        date: 'Issued Dec 2024'
    },
    {
        name: 'Modern JavaScript for Beginners',
        issuer: 'Coddy',
        date: 'Issued Dec 2024'
    },
    {
        name: 'C for beginners',
        issuer: 'Coddy',
        date: 'Issued Jul 2024'
    },
    {
        name: 'JAVA Fundamentals',
        issuer: 'Coddy',
        date: 'Issued Jul 2024'
    },
    {
        name: 'German A1',
        issuer: 'inlingua',
        date: 'Issued Apr 2024'
    },
    {
        name: 'HTML Fundamentals',
        issuer: 'Coddy',
        date: 'Issued Apr 2024'
    },
    {
        name: 'Full Stack Development 101',
        issuer: 'Simplilearn',
        date: 'Issued Mar 2024'
    }
]

export function CertificationsTab({ linkedinProfileText }: CertificationsTabProps) {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
                <div key={index} className="[perspective:1000px]">
                    <Card className="bg-card h-full hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 hover:scale-102 hover:rotate-x-3 [transform-style:preserve-3d]">
                        <CardHeader>
                            <Award className="w-8 h-8 text-accent mb-2"/>
                            <CardTitle className="font-headline text-lg leading-tight">{cert.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{cert.issuer}</CardDescription>
                            <p className="text-sm text-muted-foreground mt-2">{cert.date}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </div>
  );
}
