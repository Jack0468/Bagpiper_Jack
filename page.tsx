// app/page.tsx
"use client";
import React from 'react';

export default function BagpiperSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-xl font-bold tracking-widest uppercase">Sydney Bagpiper Jack</h1>
        <div className="space-x-6 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-gray-500">About Me</a>
          <a href="#services" className="hover:text-gray-500">Services</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 text-center bg-gray-50">
        <h2 className="text-5xl font-serif mb-4">JACK MCCUDDEN BAGPIPING</h2>
        <p className="text-lg text-gray-600 italic">Providing the highest quality bagpiping services in NSW</p>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-serif mb-6 uppercase">About Jack McCudden</h3>
          <p className="leading-relaxed mb-4">
            Hi, my name is Jack McCudden and I am a bagpiper with over 12 years of experience. 
            I have played at countless events, including weddings, funerals, and corporate events.
          </p>
          <p className="leading-relaxed">
            Whether you're looking for traditional Scottish music or modern pop songs, 
            I can provide the perfect bagpiping experience for your event.
          </p>
        </div>
        <div className="bg-gray-200 aspect-[3/4] rounded-lg shadow-inner flex items-center justify-center">
          <span className="text-gray-400 italic">[Add IMG_0889.jpeg here]</span>
        </div>
      </section>

      {/* Ticket/Booking System (The Form) */}
      <section id="contact" className="bg-black text-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif text-center mb-8 uppercase tracking-widest">Contact & Booking</h3>
          
          {/* Form Action points to Formspree for free processing */}
          <form 
            action="https://formspree.io/f/your_form_id" 
            method="POST" 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input type="text" name="first_name" placeholder="First Name" required className="p-3 bg-transparent border border-gray-700 focus:border-white outline-none" />
            <input type="text" name="last_name" placeholder="Last Name" required className="p-3 bg-transparent border border-gray-700 focus:border-white outline-none" />
            <input type="email" name="email" placeholder="Email" required className="p-3 bg-transparent border border-gray-700 focus:border-white outline-none md:col-span-2" />
            <input type="tel" name="phone" placeholder="Phone Number" className="p-3 bg-transparent border border-gray-700 focus:border-white outline-none md:col-span-2" />
            <textarea name="message" placeholder="Message/Job Details" rows={4} className="p-3 bg-transparent border border-gray-700 focus:border-white outline-none md:col-span-2"></textarea>
            
            <button type="submit" className="md:col-span-2 bg-white text-black py-3 font-bold uppercase hover:bg-gray-200 transition">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        <p>bagpiperjack1@gmail.com</p>
        <p className="mt-2">© Jack McCudden 2024</p>
      </footer>
    </div>
  );
}