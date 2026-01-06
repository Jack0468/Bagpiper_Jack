"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function BagpiperSite() {
  // Replace 'your_form_id' with the 8-character ID from Formspree
  const [state, handleSubmit] = useForm("your_form_id");

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-between items-center p-6 bg-white/80 backdrop-blur-md border-b">
        <h1 className="text-xl font-bold tracking-tighter uppercase">Sydney Bagpiper Jack</h1>
        <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#about" className="hover:text-amber-600 transition">About</a>
          <a href="#services" className="hover:text-amber-600 transition">Services</a>
          <a href="#contact" className="hover:text-amber-600 transition">Book Jack</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-stone-100">
        <h2 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight">JACK MCCUDDEN</h2>
        <p className="text-lg md:text-xl text-stone-600 font-light tracking-widest uppercase">
          Premier Bagpiping Services • NSW Australia
        </p>
        <a href="#contact" className="mt-10 px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition">
          Enquire for Event
        </a>
      </header>

      {/* Ticket System Section */}
      <section id="contact" className="py-24 bg-stone-900 text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-serif mb-4 uppercase">Booking Requests</h3>
          <p className="text-stone-400 mb-12">Submit your details below to check availability for your wedding, funeral, or event.</p>
          
          {state.succeeded ? (
            <div className="p-10 border border-green-500 bg-green-500/10 text-green-400 rounded-lg">
              <p className="text-xl font-bold">Request Received!</p>
              <p>Jack will get back to you via email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-stone-500">First Name</label>
                <input type="text" name="firstName" required className="bg-transparent border-b border-stone-700 py-2 outline-none focus:border-white transition" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-stone-500">Last Name</label>
                <input type="text" name="lastName" required className="bg-transparent border-b border-stone-700 py-2 outline-none focus:border-white transition" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-stone-500">Email Address</label>
                <input type="email" name="email" required className="bg-transparent border-b border-stone-700 py-2 outline-none focus:border-white transition" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-stone-500">Message / Event Details</label>
                <textarea name="message" rows={4} required className="bg-transparent border border-stone-700 p-3 outline-none focus:border-white transition"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button 
                type="submit" 
                disabled={state.submitting}
                className="md:col-span-2 bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-stone-200 disabled:bg-stone-600 transition"
              >
                {state.submitting ? "Sending..." : "Submit Ticket"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t bg-white">
        <p className="text-xs text-stone-400 uppercase tracking-widest">© 2026 Jack McCudden Bagpiping • Newton, NSW</p>
      </footer>
    </div>
  );
}