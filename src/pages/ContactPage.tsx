import { Phone, Mail } from "lucide-react";
import { Button } from "../shared/components/Button";

const ContactPage = () => {
  return (
    // Increased py-20 to py-32 for significant top and bottom spacing
    <main className="max-w-7xl mx-auto px-4 py-40"> 
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* --- Column 1: Information Sidebar --- */}
        <div className="w-full lg:w-1/3 shadow-sm border border-brand-light rounded px-8 py-12 flex flex-col gap-10 bg-white">
          
          {/* Row 1: Call To Us */}
          <div className="flex flex-col gap-6 border-b border-brand-light pb-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white shrink-0">
                <Phone size={20} />
              </div>
              <h3 className="font-medium text-base uppercase tracking-wider">Call To Us</h3>
            </div>
            <div className="flex flex-col gap-4 text-sm text-content-dark leading-relaxed">
              <p>We are available 24/7, 7 days a week.</p>
              <p className="font-medium">Phone: +8801611112222</p>
            </div>
          </div>

          {/* Row 2: Write To Us */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white shrink-0">
                <Mail size={20} />
              </div>
              <h3 className="font-medium text-base uppercase tracking-wider">Write To Us</h3>
            </div>
            <div className="flex flex-col gap-4 text-sm text-content-dark leading-relaxed">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="font-medium">Emails: customer@exclusive.com</p>
              <p className="font-medium">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* --- Column 2: Contact Form --- */}
        <div className="w-full lg:w-2/3 shadow-sm border border-brand-light rounded px-8 py-12 bg-white">
          <form className="flex flex-col gap-10 h-full">
            
            {/* Row 1: Three Inputs (Name, Email, Phone) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Your Name *" 
                required
                className="bg-[#F5F5F5] rounded px-4 py-4 outline-none focus:ring-1 focus:ring-brand-accent transition-all text-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email *" 
                required
                className="bg-[#F5F5F5] rounded px-4 py-4 outline-none focus:ring-1 focus:ring-brand-accent transition-all text-sm"
              />
              <input 
                type="tel" 
                placeholder="Your Phone *" 
                required
                className="bg-[#F5F5F5] rounded px-4 py-4 outline-none focus:ring-1 focus:ring-brand-accent transition-all text-sm"
              />
            </div>

            {/* Row 2: Message Area (Covers remaining height) */}
            <div className="flex-grow">
              <textarea 
                placeholder="Your Message" 
                className="bg-[#F5F5F5] rounded px-4 py-4 outline-none focus:ring-1 focus:ring-brand-accent transition-all w-full h-64 lg:h-full resize-none text-sm"
              />
            </div>

            {/* Action Row: Aligned Right */}
            <div className="flex justify-end mt-2">
              <Button 
                variant="danger" 
                className="px-12 py-4 bg-[#DB4444] text-white rounded font-medium hover:bg-[#E06767] transition-all"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};

export default ContactPage;