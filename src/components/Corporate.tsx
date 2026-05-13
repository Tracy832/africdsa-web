import { 
  BookOpenCheck, 
  Clock, 
  Layout, 
  Globe, 
  Users2, 
  TrendingUp, 
  Download, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export default function Corporate() {
  const features = [
    { text: "Customized syllabus", icon: <BookOpenCheck className="text-[#040474]" /> },
    { text: "Personalized training schedules", icon: <Clock className="text-[#040474]" /> },
    { text: "Practical, hands-on projects", icon: <Layout className="text-[#040474]" /> },
    { text: "Online, remote, or in-person delivery", icon: <Globe className="text-[#040474]" /> },
    { text: "Training for technical and non-technical teams", icon: <Users2 className="text-[#040474]" /> },
    { text: "Programs aligned to business outcomes", icon: <TrendingUp className="text-[#040474]" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Context */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm">
                Upskill Your Workforce
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Customized Data & AI <br/>Training for Teams
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Give your team the skills to work confidently with data, analytics, and AI. 
                AfriCDSA designs corporate training programs around your organization’s goals, 
                industry, skill gaps, and schedule.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-[#040474] text-white font-bold rounded-xl hover:bg-[#03035e] transition shadow-lg">
                <Download size={20} /> Download Corporate Brochure
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition">
                <MessageSquare size={20} /> Talk to Training Team
              </button>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all group"
              >
                <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <p className="font-bold text-slate-800 leading-snug">
                  {feature.text}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[#F1592A] opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 size={14} /> Available
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}