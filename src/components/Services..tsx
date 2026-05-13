import { 
  Lightbulb, 
  BarChart3, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Strategy & Readiness",
      desc: "Assess where AI can create value in your organization and build a practical roadmap for adoption.",
      icon: <Lightbulb size={24} className="text-white" />
    },
    {
      title: "Data Analytics & Dashboards",
      desc: "Transform raw data into dashboards, reports, and insights that support better decisions.",
      icon: <BarChart3 size={24} className="text-white" />
    },
    {
      title: "Machine Learning Solutions",
      desc: "Develop models for forecasting, classification, customer insights, operations, finance, HR, and other use cases.",
      icon: <Cpu size={24} className="text-white" />
    },
    {
      title: "AI Automation & Workflow Optimization",
      desc: "Use AI tools to automate repetitive tasks, improve productivity, and streamline internal processes.",
      icon: <Zap size={24} className="text-white" />
    },
    {
      title: "Data Governance & Protection",
      desc: "Strengthen privacy, compliance, data quality, and responsible data use across your organization.",
      icon: <ShieldCheck size={24} className="text-white" />
    },
    {
      title: "Corporate Data & AI Training",
      desc: "Upskill teams through customized syllabi, flexible schedules, practical projects, and expert-led sessions.",
      icon: <Users size={24} className="text-white" />
    }
  ];

  return (
    <section className="py-24 bg-[#040474] text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Data Science & AI Services for Organizations
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            AfriCDSA goes beyond training. We help organizations turn data into decisions by designing practical analytics, AI, and data capability solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icon Container - Matches the orange box style in your reference */}
              <div className="w-12 h-12 bg-[#F1592A] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-900/20">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-blue-100/70 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 text-[#F1592A] font-bold group-hover:gap-4 transition-all">
                Learn more <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-[#F1592A] text-white font-bold rounded-lg hover:bg-[#d94e22] transition-transform hover:scale-105 shadow-xl shadow-black/20">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}