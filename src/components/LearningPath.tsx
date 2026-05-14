import { 
  GraduationCap, 
  TrendingUp, 
  Briefcase, 
  Building2 
} from 'lucide-react';

export default function LearningPath() {
  const paths = [
    {
      title: "Beginner",
      subtitle: "New to Data Science",
      duration: "6-12 months",
      process: "Start with foundational courses → Build projects → Get certified.",
      icon: <GraduationCap size={32} className="text-[#040474]" />
    },
    {
      title: "Career Switcher",
      subtitle: "Transitioning to data",
      duration: "4-8 months",
      process: "Intensive bootcamp → Portfolio development → Job placement support",
      icon: <TrendingUp size={32} className="text-[#040474]" />
    },
    {
      title: "Working Professional",
      subtitle: "Upskilling on the job",
      duration: "Flexible",
      process: "Part-time learning → Apply immediately → Advance your career",
      icon: <Briefcase size={32} className="text-[#040474]" />
    },
    {
      title: "Corporate Team",
      subtitle: "Organization-wide training",
      duration: "Customized",
      process: "Needs assessment → Custom curriculum → Team certification",
      icon: <Building2 size={32} className="text-[#040474]" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-black mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-slate-600">
            We have tailored programs for every stage of your data science journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:bg-white group cursor-default"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-blue-50 transition-colors">
                {path.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-1">{path.title}</h3>
              <p className="text-slate-500 text-sm mb-4 font-medium">{path.subtitle}</p>
              
              <div className="mb-6 inline-block px-3 py-1 bg-blue-100/50 text-[#040474] text-xs font-bold rounded-md shadow-[0_2px_10px_rgba(4,4,116,0.1)]">
                {path.duration}
              </div>
              
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {path.process}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
