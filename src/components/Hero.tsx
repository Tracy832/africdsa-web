import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Image: The vision image we generated */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/dna.png" 
          alt="Africdsa Background Vision"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <Image 
            src="/africdsa-logo.jpeg" 
            alt="Africdsa Logo" 
            width={180} 
            height={60} 
            className="object-contain"
          />
          <div className="hidden md:flex gap-6 text-slate-800 font-medium">
            <Link href="/" className="hover:text-[#FF6B00] transition">Home</Link>
            <Link href="/courses" className="hover:text-[#FF6B00] transition">Courses</Link>
            <Link href="/about" className="hover:text-[#FF6B00] transition">About</Link>
            <Link href="/corporate" className="hover:text-[#FF6B00] transition">Corporate Training</Link>
            <Link href="/events" className="hover:text-[#FF6B00] transition">Events</Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-8 pt-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            Learn Data Science & AI. <br />
            <span className="text-[#1A237E]">Build AI-Powered Organizations.</span>
          </h1>
          
          <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
            AfriCDSA helps professionals, teams, and organizations gain practical Data Science, 
            Machine Learning, Artificial Intelligence, Analytics, and Data Protection skills 
            through accredited training, hands-on projects, corporate programs, and AI consulting services.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition shadow-sm">
              Explore Courses
            </button>
            <button className="px-8 py-4 bg-[#FF6B00] text-white font-bold rounded-lg hover:bg-orange-600 transition shadow-lg">
              Book a Consultation
            </button>
          </div>

          {/* Trust Line */}
          <div className="pt-6 border-t border-slate-300/50">
            <p className="text-slate-900 font-semibold">
               <span className="font-normal text-slate-600">Accredited training. Practical projects. Flexible online, remote, and in-person learning.</span>
            </p>
          </div>
        </div>

        {/* Right side Image Placeholder */}
        <div className="relative aspect-square w-full max-w-lg mx-auto bg-white/40 backdrop-blur-md rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden flex items-center justify-center group">
          {/* This is where your featured person or team photo goes */}
          <div className="text-center p-12">
            <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
               <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 font-medium italic">Insert Team / Professional Image Here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
