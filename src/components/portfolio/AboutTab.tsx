
'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Linkedin, Github, Instagram, Mail, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

interface AboutTabProps {
  linkedinProfileText: string;
}

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/anuska-dasgupta-232a30293/'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/anu31d'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/anuska.______?igsh=dTJya2FrcXlkNzFx'
  }
];

const email = 'anuska.dasguptaa@gmail.com';

export function AboutTab({ linkedinProfileText }: AboutTabProps) {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div>
      <h2 className="text-3xl font-headline mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6 text-foreground/90 leading-relaxed">
          <p>
            I’m a third-year B.Tech CSE student at SRMIST (CGPA: 9.69) with an insatiable passion for DSA, web development, and AI-driven solutions. Fueled by curiosity and innovation, I strive to build technology that makes a difference.
          </p>
          <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="icon" onClick={() => setShowEmail(!showEmail)} className="bg-card/50 hover:bg-accent/20 hover:text-accent-foreground border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
              </Button>
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild className="bg-card/50 hover:bg-accent/20 hover:text-accent-foreground border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          {showEmail && (
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg border border-primary/20 animate-fade-in">
              <span className="text-accent font-mono">{email}</span>
              <Button variant="ghost" size="icon" onClick={handleCopy} className="w-8 h-8">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          )}

          <div className="[perspective:1000px]">
            <Card className="bg-card border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-2 hover:scale-105 hover:rotate-x-4 [transform-style:preserve-3d]">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-accent">On a Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg italic">
                        "Passionate about mastering DSA, pushing the boundaries of AI & tech innovation, and crafting solutions that leave a lasting impact. Let’s connect, innovate, and make a difference together!"
                    </p>
                </CardContent>
            </Card>
          </div>
          <p>
            A seasoned orator with 13 years of experience, I have honed the art of impactful storytelling, persuasive speech, and thought leadership, winning multiple accolades for my speaking skills.
          </p>
        </div>
        <div className="md:col-span-2 [perspective:800px]">
            <div className="group [transform-style:preserve-3d] animate-float">
                <Image
                    src={getAssetPath("/images/profile-photo.jpg")}
                    alt="Anuska Dasgupta"
                    width={400}
                    height={400}
                    className="rounded-xl shadow-2xl shadow-primary/20 w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:rotate-y-10"
                    draggable="false" onContextMenu={(e) => e.preventDefault()}
                    data-ai-hint="profile photo"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
