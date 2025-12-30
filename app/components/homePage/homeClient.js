import React from 'react';
import Image from 'next/image';

const HomeClient = () => {
  const clients = [
    { name: 'Lovio', image: '/client/Lovio.svg' },
    { name: 'Hyperflex', image: '/client/Hyperflex.svg' },
    { name: 'MTM', image: '/client/mtm.svg' },
    { name: 'RadiInsight', image: '/client/RadiInsight.svg' },
    { name: 'IoreADY', image: '/IoreADY.svg' },
    { name: 'Storefires', image: '/client/storefires.svg' },
    { name: '', image: '/client/websign.svg' },
    { name: 'Holcim', image: '/testimonial/Testimonials2.svg' },
    { name: 'Carlisle', image: '/client/surabhaiLogo.svg' },
    { name: 'ESAB', image: '/testimonial/tcare.svg' },
    { name: 'ExxonMobil', image: '/client/littlespark.svg' },
    { name: 'GSK', image: '/client/prezerv1.svg' }
  ];

  return (
    <div className="min-h-screen bg-secondary text-primary py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-primary">
          Codework AI Customers
        </h2>
      </div>

      {/* Logo Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-square bg-slate-700/70 border border-primary/10 rounded-none p-8 flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <Image
                  src={client.image}
                  alt={`${client.name} logo`}
                  width={client.image === '/client/surabhaiLogo.svg' ? 160 : 112}
                  height={client.image === '/client/surabhaiLogo.svg' ? 64 : 48}
                  className={`${client.image === '/client/surabhaiLogo.svg' ? 'w-36 h-20' : 'w-28 h-12'} object-contain`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeClient;
