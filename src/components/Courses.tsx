import { 
  Database, 
  BarChart3, 
  Cpu, 
  Wallet, 
  ShieldCheck, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export default function Courses() {
  const courseData = [
    {
      title: "Data Scientist Program",
      desc: "Master machine learning, statistical analysis, and predictive modeling to become a complete data scientist.",
      tags: ["Python", "ML", "Statistics", "Deep Learning"],
      icon: <Database size={40} color="#02024A" />,
      btnText: "Learn More"
    },
    {
      title: "Data Analyst Program",
      desc: "Learn to analyze, visualize, and communicate insights from data using industry-standard tools.",
      tags: ["SQL", "Power BI", "Excel", "Tableau"],
      icon: <BarChart3 size={40} color="#02024A" />,
      btnText: "Learn More"
    },
    {
      title: "AI Expert Program",
      desc: "Dive deep into artificial intelligence, neural networks, and advanced AI applications.",
      tags: ["AI", "NLP", "Computer Vision", "TensorFlow"],
      icon: <Cpu size={40} color="#02024A" />,
      btnText: "Learn More"
    },
    {
      title: "Finance Analytics",
      desc: "Combine financial expertise with data analytics for strategic business decision-making.",
      tags: ["Financial Modeling", "Analytics", "Risk Analysis"],
      icon: <Wallet size={40} color="#02024A" />,
      btnText: "Learn More"
    },
    {
      title: "Data Protection & Governance",
      desc: "Master data privacy, compliance, and governance frameworks for organizational data management.",
      tags: ["GDPR", "Compliance", "Data Security", "Policy"],
      icon: <ShieldCheck size={40} color="#02024A" />,
      btnText: "Learn More"
    },
    {
      title: "Corporate & Custom Programs",
      desc: "Need a tailored program for your team? AfriCDSA creates customized learning paths for organizations.",
      tags: ["Custom Curriculum", "On-site", "B2B Training"],
      icon: <Users size={40} color="#02024A" />,
      btnText: "Request Corporate Training"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-16">
          Certification Programs Built for the Future of Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {courseData.map((course, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-3xl border border-transparent transition-all duration-300 hover:border-[#040474] hover:shadow-2xl cursor-pointer"
            >
              <div className="mb-6">{course.icon}</div>
              <h3 className="text-2xl font-bold text-black group-hover:text-[#040474] transition-colors mb-4">
                {course.title}
              </h3>
              <p className="text-slate-600 mb-6">{course.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-[#02024A] text-sm font-medium rounded-md shadow-sm border border-blue-100/50">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-[#040474] text-white rounded-lg font-bold hover:bg-[#02024A] transition shadow-md">
                {course.btnText} <ArrowRight size={18} />
              </button>
            </div>
          ))}

          {/* Seventh Special Intake Container */}
          <div className="p-8 bg-[#F1592A] rounded-3xl shadow-xl flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-3xl font-extrabold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg opacity-90 mb-8 font-medium">
              May 2026 intake now open! Limited seats available.
            </p>
            <button className="px-10 py-4 bg-white text-[#F1592A] font-black rounded-xl hover:bg-orange-50 transition transform hover:scale-105 shadow-2xl">
              Apply for May 2026
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}