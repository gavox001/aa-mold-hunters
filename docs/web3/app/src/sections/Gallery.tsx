import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const galleryItems = [
  {
    before: '/images/before-after-1.jpg',
    title: 'Bathroom Mold Remediation',
    description: 'Complete removal of black mold from bathroom walls and tiles',
    location: 'Hollywood, FL',
  },
  {
    before: '/images/before-after-2.jpg',
    title: 'Water Damage Restoration',
    description: 'Full living room restoration after flooding',
    location: 'Miami, FL',
  },
  {
    before: '/images/before-after-3.jpg',
    title: 'Ceiling Water Damage Repair',
    description: 'Ceiling restoration after roof leak',
    location: 'Fort Lauderdale, FL',
  },
];

export function Gallery() {
  const containerRef = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-tech-slate to-tech-navy overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="text-eco-primary font-semibold text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Before & <span className="text-eco-primary">After</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg">
              Real results from real homes across South Florida.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="stagger">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative glass-card overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelectedImage(item.before);
                  setCurrentIndex(i);
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.before}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-navy via-tech-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Zoom icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-eco-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    {item.description}
                  </p>
                  <div className="mt-3 text-eco-primary text-xs font-medium">
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Images */}
          <div className="mt-16" data-animate="fade-up">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Our Work in Action
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '/images/mold-inspection.jpg',
                '/images/water-damage.jpg',
                '/images/mold-remediation.jpg',
                '/images/thermal-detection.jpg',
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative h-40 md:h-48 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Work ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-tech-navy/40 group-hover:bg-tech-navy/20 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-tech-slate border-white/10 p-0">
          <div className="relative">
            <img
              src={selectedImage || ''}
              alt="Gallery"
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                  setSelectedImage(galleryItems[currentIndex].before);
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                  setSelectedImage(galleryItems[currentIndex].before);
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
