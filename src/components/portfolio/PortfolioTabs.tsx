'use client';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { AboutTab } from '@/components/portfolio/AboutTab';
import { ExperienceTab } from '@/components/portfolio/ExperienceTab';
import { EducationTab } from '@/components/portfolio/EducationTab';
import { CertificationsTab } from '@/components/portfolio/CertificationsTab';
import { ProjectsTab } from '@/components/portfolio/ProjectsTab';
import { SkillsTab } from '@/components/portfolio/SkillsTab';
import { GalleryTab } from '@/components/portfolio/GalleryTab';
import { AwardsTab } from '@/components/portfolio/AwardsTab';
import { User, Briefcase, GraduationCap, Award, Star, Lightbulb, Badge, Camera } from 'lucide-react';


interface PortfolioTabsProps {
  linkedinProfileText: string;
}

const tabs = [
    { value: 'about', label: 'About', icon: User, component: AboutTab },
    { value: 'experience', label: 'Experience', icon: Briefcase, component: ExperienceTab },
    { value: 'projects', label: 'Projects', icon: Lightbulb, component: ProjectsTab },
    { value: 'awards', label: 'Awards', icon: Award, component: AwardsTab },
    { value: 'skills', label: 'Skills', icon: Star, component: SkillsTab },
    { value: 'education', label: 'Education', icon: GraduationCap, component: EducationTab },
    { value: 'certifications', label: 'Certs', icon: Badge, component: CertificationsTab },
    { value: 'gallery', label: 'Gallery', icon: Camera, component: GalleryTab },
];

export function PortfolioTabs({ linkedinProfileText }: PortfolioTabsProps) {
  return (
    <Tabs defaultValue="about" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-4xl grid-cols-2 sm:grid-cols-4 md:grid-cols-8 h-auto">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.value} 
              value={tab.value} 
              className="flex flex-col sm:flex-row gap-2 items-center text-md py-3 px-4 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:bg-accent/20 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-primary/20"
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab) => {
          const TabComponent = tab.component;
          return (
            <TabsContent key={tab.value} value={tab.value}>
                <div className="bg-card p-6 md:p-12 rounded-lg shadow-lg animate-fade-in-up">
                    <TabComponent linkedinProfileText={linkedinProfileText} />
                </div>
            </TabsContent>
          )
      })}
    </Tabs>
  );
}
