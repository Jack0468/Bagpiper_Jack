"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Reusable Video Component for your YouTube clips
const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black rounded-sm shadow-2xl group">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      className="absolute top-0 left-0 w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

export default function BagpiperSite() {
  // Replace "your_form_id" with your actual Formspree ID
  const [state, handleSubmit] = useForm("xnjnkrjd");

  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed w-full z-50 flex justify-between items-center p-6 bg-obsidian/95 border-b border-gold-metallic/30 text-gold-soft">
        <h1 className="text-lg md:text-xl font-serif tracking-[0.2em] uppercase">Sydney Bagpiper Jack</h1>
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="#about" className="hover:text-gold-light transition">About Me</a>
          <a href="#services" className="hover:text-gold-light transition">Services</a>
          <a href="#contact" className="hover:text-gold-light transition">Booking</a>
        </div>
      </nav>

      {/* HERO SECTION - Uses your Wix Hero Image */}
      <header className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-obsidian">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://static.wixstatic.com/media/fcf997_62f2b1a2d10643948f2b4abb7173e7cc~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fcf997_62f2b1a2d10643948f2b4abb7173e7cc~mv2.jpeg"
            alt="Jack McCudden Bagpiping"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif mb-6 text-gold-soft tracking-tighter uppercase">
            Jack McCudden <br/> <span className="text-white">Bagpiping</span>
          </h2>
          <div className="h-1 w-24 bg-gold-metallic mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gold-soft/80 text-sm md:text-lg uppercase tracking-[0.4em] font-light">
            Premier Bagpiping Services • NSW Australia
          </p>
          <a href="#contact" className="inline-block mt-12 px-10 py-4 border border-gold-metallic text-gold-soft text-xs font-bold uppercase tracking-widest hover:bg-gold-metallic hover:text-obsidian transition-all duration-500">
            Enquire for Event
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-20 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-serif mb-8 text-obsidian uppercase">About Jack</h3>
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
              <p>Hi, my name is Jack McCudden and I am a bagpiper with over 12 years of experience.</p>
              <p>I have played at countless events, including weddings, funerals, and corporate events. My passion for bagpiping began at a young age and has only grown stronger.</p>
              <p>Whether you're looking for traditional Scottish music or modern pop songs, I can provide the perfect bagpiping experience for your event.</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative p-4 border border-gold-metallic/20">
              <img 
                src="https://static.wixstatic.com/media/fcf997_f8ef7765dadd4d8eb63e142026198bb7~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85/fcf997_f8ef7765dadd4d8eb63e142026198bb7~mv2.jpg"
                alt="Jack McCudden"
                className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & MEDIA SECTION */}
      <section id="services" className="py-24 bg-obsidian text-white px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif text-gold-soft mb-4 uppercase">My Services</h3>
            <p className="text-stone-400 tracking-widest uppercase text-sm">Professional piping from Sydney to the Coast</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <YouTubeEmbed videoId="VIDEO_ID_1" title="Amazing Grace" />
            <YouTubeEmbed videoId="sdhcdluVqN0" title="Clocks by Coldplay" />
            
            <div className="flex flex-col justify-center p-8 bg-stone-900/50 border-l-4 border-gold-metallic">
              <h4 className="text-xl font-serif text-gold-soft mb-4">Weddings & Celebrations</h4>
              <p className="text-stone-400">Available for Weddings, Birthdays, and Corporate functions. I provide a mix of traditional and modern sets tailored to your event.</p>
            </div>

            <div className="flex flex-col justify-center p-8 bg-stone-900/50 border-l-4 border-gold-metallic">
              <h4 className="text-xl font-serif text-gold-soft mb-4">Memorials & Funerals</h4>
              <p className="text-stone-400">Providing a respectful and professional tribute for your loved ones across all of NSW.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / TICKET SYSTEM */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-stone-100">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8 md:p-16 border-t-8 border-gold-metallic">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif text-obsidian mb-4 uppercase">Contact & Booking</h3>
            <p className="text-stone-500">Reach out with any questions or booking inquiries and let's make your event unforgettable.</p>
          </div>

          {state.succeeded ? (
            <div className="p-10 bg-gold-soft/20 text-gold-metallic border border-gold-metallic rounded text-center">
              <p className="text-2xl font-serif">Thank you, Jack will be in touch!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2">First Name</label>
                  <input type="text" name="firstName" required className="bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-gold-metallic transition" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-gold-metallic transition" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2">Email Address</label>
                <input type="email" name="email" required className="bg-stone-50 border-b border-stone-200 p-3 outline-none focus:border-gold-metallic transition" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2">Message</label>
                <textarea name="message" rows={5} required className="bg-stone-50 border border-stone-200 p-4 outline-none focus:border-gold-metallic transition"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-obsidian text-gold-soft py-5 font-bold uppercase tracking-[0.3em] hover:bg-gold-metallic hover:text-obsidian transition-all duration-500"
              >
                {state.submitting ? "Processing..." : "Submit Booking Ticket"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-obsidian text-center border-t border-gold-metallic/20">
        <div className="mb-6 space-x-6">
           <a href="https://www.instagram.com/sydneybagpiperjack/" className="text-gold-soft hover:text-white transition">Instagram</a>
           <a href="mailto:bagpiperjack1@gmail.com" className="text-gold-soft hover:text-white transition">Email</a>
        </div>
        <p className="text-[10px] text-stone-500 uppercase tracking-widest">© 2026 Jack McCudden • Newtown, NSW</p>
      </footer>

    </div>
  );
}