import '../../styles/components/skills.css';
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những công nghệ và kỹ năng tôi sử dụng để xây dựng các ứng dụng web
            và mobile hiện đại.
          </p>
        </div>
        {/* Skill Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="skill-card bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Frontend Development
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>HTML5, CSS3, JavaScript</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>React.js / Next.js</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Responsive Design</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Tailwind CSS / SCSS</li>
            </ul>
          </div>
          {/* Mobile */}
          <div className="skill-card bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Mobile Development
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Flutter & Dart</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Firebase Integration</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>State Management</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Native APIs & SDKs</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="skill-card bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Backend Development
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Python & Django/Flask</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Node.js & Express</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>RESTful APIs</li>
              <li><i className="fas fa-check-circle text-green-500 mr-2"></i>SQL & NoSQL Databases</li>
            </ul>
          </div>
        </div>
        {/* Progress Bars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Progress label="Flutter & Dart" value={65} />
            <Progress label="Python" value={30} />
            <Progress label="JavScript & React" value={85} />
          </div>
          <div>
            <Progress label="E-commerce Development" value={85} />
            <Progress label="UI/UX Design" value={40} />
            <Progress label="Database Management" value={65} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sub-component cho progress bar*/
function Progress({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-600">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
