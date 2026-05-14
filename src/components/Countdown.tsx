'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Users, Calendar } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-06-10T03:00:15').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      {/* Reduced width and height for a sleeker look */}
      <div className="bg-[#040474] text-white w-16 h-20 md:w-20 md:h-24 rounded-xl flex items-center justify-center text-2xl md:text-4xl font-black shadow-md">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-8 px-4">
      {/* Reduced max-width and internal padding */}
      <div className="max-w-4xl mx-auto bg-white rounded-[1.5rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Sleeker Top Banner */}
        <div className="bg-[#F1592A] py-2 flex items-center justify-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs">
          <AlertCircle size={14} />
          Limited Time Offer
        </div>

        <div className="p-6 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
            May 2026 Intake Now Open!
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-8">
            Join the next cohort of Africa's data science leaders
          </p>

          {/* Compact Clock Grid */}
          <div className="flex justify-center gap-3 md:gap-6 mb-10">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Minimized Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto border-t border-slate-50 pt-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 shrink-0" size={20} />
              <div>
                <p className="font-bold text-slate-900 text-sm">Early Bird Discount</p>
                <p className="text-slate-500 text-[10px]">Save up to 20% on tuition</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-[#040474] shrink-0" size={20} />
              <div>
                <p className="font-bold text-slate-900 text-sm">Limited Seats</p>
                <p className="text-slate-500 text-[10px]">Only 50 spots available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-[#F1592A] shrink-0" size={20} />
              <div>
                <p className="font-bold text-slate-900 text-sm">Start Date</p>
                <p className="text-slate-500 text-[10px]">June 9, 2026</p>
              </div>
            </div>
          </div>

          {/* Slimmer CTA Button */}
          <button className="px-10 py-3.5 bg-[#F1592A] text-white text-base font-black rounded-xl hover:bg-[#d94e22] transition-all shadow-lg hover:shadow-orange-100">
            Apply Now - Secure Your Spot
          </button>
        </div>
      </div>
    </section>
  );
}