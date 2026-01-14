import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import Image from 'next/image';

interface AwardsTabProps {
  linkedinProfileText: string;
}

const awards = [
    {
        name: '2nd Prize at SARAM Project Expo 2025',
        issuer: 'SRM Ramapuram',
        date: 'Feb 2025',
        description: 'Secured 2nd place at SARAM Project Expo, organized by SRM Institute of Science and Technology, Ramapuram, winning a ₹25,000 cash prize. Engaged with 20+ schools and students, exchanging ideas and receiving invaluable insights. Honoured to receive the award in the presence of esteemed dignitaries and inspired by Chief Guest, Ponnusundar Murugiah (Director - Digital Engineering & Product Management, AT&T).',
        image: '/images/award-saram-expo.jpg',
        aiHint: 'award presentation'
    },
    {
        name: '1st Place in Speech Competition at National Chemistry Day 2023',
        issuer: 'SRM Ramapuram',
        date: 'Oct 2023',
        description: 'I had the privilege to participate in a speech competition on "The Chemistry of Climate Change: Impacts and Solutions" organized by the Department of Chemistry at SRM Ramapuram, and I’m proud to announce that I secured 1st place! Exploring the complex chemistry behind climate change and discussing actionable solutions was an enriching experience.',
        image: '/images/award-speech-competition.jpg',
        aiHint: 'speech competition'
    },
    {
        name: '2nd Place in Oral Presentation at National Chemistry Day 2023',
        issuer: 'SRM Ramapuram',
        date: 'Oct 2023',
        description: 'I had the opportunity to participate in an oral presentation competition on the topic "Applications of Computer Technologies for Advancements in Science" as part of National Chemistry Day organized by the Department of Chemistry at SRM Ramapuram. I\'m thrilled to announce that I secured 2nd place!',
        image: '/images/award-oral-presentation.jpg',
        aiHint: 'presentation award'
    }
]

const rotations = [
  'rotate-2',
  '-rotate-1',
  'rotate-1'
];


export function AwardsTab({ linkedinProfileText }: AwardsTabProps) {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Awards &amp; Recognitions</h2>
      <div className="space-y-12">
        {awards.map((award, index) => (
             <div key={index} className="[perspective:1000px]">
                <Card className="bg-card border-border overflow-hidden transition-all duration-300 shadow-lg">
                    <div className="grid md:grid-cols-5 gap-6 items-center">
                        <div className="md:col-span-2 p-6">
                            <div className={`group bg-white p-3 rounded-sm shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 ${rotations[index % rotations.length]} hover:!rotate-0`}>
                                <div className="bg-background aspect-w-3 aspect-h-2">
                                    <Image
                                        src={award.image}
                                        alt={award.name}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-contain rounded-sm"
                                        draggable="false" onContextMenu={(e) => e.preventDefault()}
                                        data-ai-hint={award.aiHint}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <CardHeader>
                                 <CardTitle className="flex items-center gap-3 font-headline text-xl">
                                     <Trophy className="w-6 h-6 text-primary"/>
                                     {award.name}
                                 </CardTitle>
                                 <CardDescription>{award.issuer} • {award.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/90">{award.description}</p>
                            </CardContent>
                        </div>
                    </div>
                </Card>
             </div>
        ))}
      </div>
    </div>
  );
}
