// Example: A basic Booking Form Component
import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <form action="https://formspree.io/f/your-unique-id" method="POST" className="flex flex-col gap-4">
      <label className="font-bold">Email Address</label>
      <input type="email" name="email" required className="border p-2 rounded" />
      
      <label className="font-bold">Job Details</label>
      <textarea name="message" placeholder="Describe the gig..." className="border p-2 rounded"></textarea>
      
      <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Submit Request
      </button>
    </form>
  );
};

export default BookingForm;