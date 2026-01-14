import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

const galleryItems = [
    { src: '/images/gallery-project-day.jpg', width: 800, height: 600, caption: 'Presenting at Project Day', aiHint: 'project presentation' },
    { src: '/images/gallery-winning-project-day.jpg', width: 800, height: 600, caption: '2nd prize 25000 cash prize winner', aiHint: 'award ceremony' },
    { src: '/images/gallery-texus-speaker.jpg', width: 800, height: 600, caption: 'Keynote Speaker at TEXUS', aiHint: 'public speaking' },
    { src: '/images/gallery-promptkraft-speaker.jpg', width: 800, height: 600, caption: 'Speaker at PromptKraft Workshop', aiHint: 'workshop teaching' },
    { src: '/images/gallery-web-dev-speaker.jpg', width: 800, height: 600, caption: 'Leading a Web Dev Session', aiHint: 'coding workshop' },
    { src: '/images/gallery-ai-cyberquest.jpg', width: 800, height: 600, caption: 'Speaker at AI Cyber Quest', aiHint: 'hackathon event' },
    { src: '/images/gallery-google-girl-hackathon.jpg', width: 800, height: 600, caption: 'Google Girl Hackathon 2025', aiHint: 'tech event' },
    { src: '/images/gallery-student-interaction.jpg', width: 800, height: 600, caption: 'Interacting with students', aiHint: 'community engagement' },
    { src: '/images/gallery-speaker-again.jpg', width: 800, height: 600, caption: 'On stage as a speaker', aiHint: 'conference speaker' },
    { src: '/images/gallery-ngo-work.jpg', width: 800, height: 600, caption: 'Volunteering with an NGO', aiHint: 'volunteer work' },
    { src: '/images/gallery-with-team.jpg', width: 800, height: 600, caption: 'Collaborating with the team', aiHint: 'team collaboration' },
    { src: '/images/gallery-trophies.jpg', width: 800, height: 600, caption: 'Collection of trophies', aiHint: 'trophy award' },
    { src: '/images/gallery-first-hackathon.jpg', width: 800, height: 600, caption: 'My first hackathon experience', aiHint: 'hackathon coding' },
    { src: '/images/gallery-medals.jpg', width: 800, height: 600, caption: 'Showcasing medals', aiHint: 'achievement medal' },
    { src: '/images/gallery-receiving-speech-award.jpg', width: 800, height: 600, caption: 'Receiving a speaking award', aiHint: 'public speaking award' },
    { src: '/images/gallery-ngo-event.jpg', width: 800, height: 600, caption: 'At an NGO event', aiHint: 'social event' },
    { src: '/images/gallery-climate-change-speaker.jpg', width: 800, height: 600, caption: 'Speaking on climate change', aiHint: 'presentation stage' },
    { src: '/images/gallery-intellects-club.jpg', width: 800, height: 600, caption: 'Leading an Intellects Club session', aiHint: 'club meeting' },
    { src: '/images/gallery-working.jpg', width: 800, height: 600, caption: 'Focused at work', aiHint: 'woman coding' },
    { src: '/images/gallery-speaking-always.jpg', width: 800, height: 600, caption: 'Passionate about public speaking', aiHint: 'orator speaking' },
    { src: '/images/gallery-launchpad-event.jpg', width: 800, height: 600, caption: 'At a Launchpad event', aiHint: 'startup event' },
];

const rotations = [
  'rotate-2',
  '-rotate-2',
  'rotate-1',
  '-rotate-1',
  'rotate-3',
  '-rotate-3'
];

export function GalleryTab() {
  return (
    <div>
      <h2 className="text-3xl font-headline mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gallery</h2>
      <p className="text-muted-foreground mb-12 text-center">A visual scrapbook of my journey, capturing moments of innovation, leadership, and community.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="group relative w-full h-full p-4">
            <div className={`bg-background p-3 pb-12 rounded-sm shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-accent/30 ${rotations[index % rotations.length]} hover:!rotate-0 hover:!scale-110 z-0 hover:z-10`}>
                <div className="bg-white aspect-square">
                    <Image
                        src={getAssetPath(item.src)}
                        alt={item.caption}
                        width={item.width}
                        height={item.height}
                        className="w-full h-full object-contain"
                        draggable="false" onContextMenu={(e) => e.preventDefault()}
                        data-ai-hint={item.aiHint}
                    />
                </div>
                 <div className="absolute bottom-4 left-6 right-6 text-center">
                    <p className="text-foreground/90 font-headline text-sm italic">
                        {item.caption}
                    </p>
                 </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
