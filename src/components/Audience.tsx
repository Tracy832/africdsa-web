import { User, Building2, ArrowRight } from 'lucide-react';

export default function Audience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Who Are You?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're an individual looking to upskill or an organization seeking digital transformation, we have the right solutions for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individuals Container */}
          <div className="group p-10 rounded-3xl border-2 border-slate-100 transition-all duration-300 hover:border-[#040474] hover:shadow-xl cursor-default">
            <User size={48} color="#040474" strokeWidth={1.5} className="mb-6" />
            <h3 className="text-2xl font-bold text-[#040474] mb-2">For Individuals</h3>
            <p className="text-slate-600 mb-8 font-medium">Start or grow your career in Data Science and AI</p>
            
            <ul className="space-y-4 mb-10">
              {['Accredited certification programs', 'Hands-on project-based learning', 'Career support and mentorship', 'Flexible online and in-person options'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#040474]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#040474] text-white rounded-lg font-bold hover:bg-[#03035e] transition w-fit">
              Explore Learning Paths <ArrowRight size={20} />
            </button>
          </div>

          {/* Organizations Container */}
          <div className="group p-10 rounded-3xl border-2 border-slate-100 transition-all duration-300 hover:border-[#F1592A] hover:shadow-xl cursor-default">
            <Building2 size={48} color="#F1592A" strokeWidth={1.5} className="mb-6" />
            <h3 className="text-2xl font-bold text-[#F1592A] mb-2">For Organizations</h3>
            <p className="text-slate-600 mb-8 font-medium">Use data and AI to improve business performance</p>
            
            <ul className="space-y-4 mb-10">
              {['Custom corporate training programs', 'AI & analytics consulting services', 'Data strategy and implementation', 'Ongoing support and partnership'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#F1592A]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#F1592A] text-white rounded-lg font-bold hover:bg-[#d94e22] transition w-fit">
              Book a Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}