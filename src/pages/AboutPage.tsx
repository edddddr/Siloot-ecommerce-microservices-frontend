import { Store, DollarSign, ShoppingBag, Coins } from "lucide-react";
import {aboutImage} from "../assets/images/index"; 
import { StatCard } from "../features/about/components/StatCard";

const AboutPage = () => {
  const stats = [
    {
      icon: <Store size={40} strokeWidth={1.5} />,
      title: "10.5k",
      subtitle: "Sallers active our site",
    },
    {
      icon: <DollarSign size={40} strokeWidth={1.5} />,
      title: "33k",
      subtitle: "Monthly Product Sale",
    },
    {
      icon: <ShoppingBag size={40} strokeWidth={1.5} />,
      title: "45.5k",
      subtitle: "Customer active in our site",
    },
    {
      icon: <Coins size={40} strokeWidth={1.5} />,
      title: "25k",
      subtitle: "Anual gross sale in our site",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 lg:py-20">
      {/* --- Section 1: Our Story (Standardized Container) --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-32">
        
        {/* Column 1: Story Text */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-widest text-content-dark">
            Our Story
          </h1>
          
          <div className="flex flex-col gap-6 text-base leading-relaxed text-content-dark">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping 
              makterplace with an active presense in Bangladesh. Supported by 
              wide range of tailored marketing, data and service solutions, 
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a 
              very fast. Exclusive offers a diverse assotment in categories 
              ranging from consumer.
            </p>
          </div>
        </div>

        {/* Column 2: Image (Fully Displayed) */}
        <div className="w-full flex justify-end">
          <div className="w-full h-[400px] md:h-[500px] bg-brand-cream rounded overflow-hidden">
            <img 
              src={aboutImage} 
              alt="Our Story" 
              className="w-full h-full object-cover" // or "object-contain" if you want to see the edges of the image
            />
          </div>
        </div>
      </section>

      {/* --- Section 2: Statistics Cards --- */}
      <section className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              title={stat.title}
              subtitle={stat.subtitle}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;