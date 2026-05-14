import { 
  Wrench, 
  Award, 
  CalendarClock, 
  Globe2, 
  Lightbulb 
} from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      title: "Practical, hands-on learning",
      description: "Work on real-world projects that mirror industry challenges.",
      icon: <Wrench size={32} className="text-[#F1592A]" />
    },
    {
      title: "Accredited certifications",
      description: "Gain certifications backed by recognized accreditation partners including IABAC and GSDC.",
      icon: <Award size={32} className="text-[#040474]" />
    },
    {
      title: "Flexible learning options",
      description: "Choose virtual classes, physical sessions, or self-paced e-learning depending on your schedule.",
      icon: <CalendarClock size={32} className="text-[#F1592A]" />
    },
    {
      title: "Built for Africa’s digital economy",
      description: "AfriCDSA was founded in Kenya and focuses on bridging Africa’s digital skills gap.",
      icon: <Globe2 size={32} className="text-[#040474]" />
    },
    {
      title: "Training plus implementation",
      description: "Move from learning to execution with consulting, corporate programs, and AI/data solutions.",
      icon: <Lightbulb size={32} className="text-[#F1592A]" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Why Learn and Build with AfriCDSA?
          </h2>
          <div className="w-24 h-1.5 bg-[#F1592A] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 w-fit p-4 rounded-2xl bg-slate-50">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
          
          {/* Decorative Stat or Quote Card */}
          <div className="p-8 bg-[#040474] rounded-3xl text-white flex flex-col justify-center text-center">
            <p className="text-3xl font-black mb-2">Digital Capability</p>
            <p className="text-blue-100/80 font-medium">
              Evolving as a partner delivering machine learning solutions across Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}