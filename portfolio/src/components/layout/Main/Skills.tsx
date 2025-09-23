import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SkillIconProps {
  src: string;
  alt: string;
  name: string;
  level?: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  index: number;
}

interface Skill {
  src: string;
  alt: string;
  name: string;
  level?: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Skill[];
}

const SkillIcon = ({ src, alt, name, level, index }: SkillIconProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);

  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'Expert': return 'bg-blue-600';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-blue-400';
      case 'Beginner': return 'bg-gray-400';
      default: return 'bg-blue-500';
    }
  };

  const getLevelWidth = (level?: string) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      case 'Beginner': return 'w-2/5';
      default: return 'w-4/5';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 60);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      ref={iconRef}
      className={`
        relative group transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
      `}
      style={{ transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white rounded-xl border transition-all duration-300 ease-out
        flex items-center justify-center cursor-pointer relative overflow-hidden
        ${isHovered 
          ? 'border-blue-600 shadow-lg shadow-blue-100 -translate-y-1' 
          : 'border-gray-200 shadow-sm hover:border-gray-300'
        }
      `}>
        <img 
          src={src} 
          alt={alt} 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-all duration-300 filter"
          style={{
            filter: isHovered ? 'none' : 'grayscale(0.3)'
          }}
        />
        
        {/* Skill Level Indicator */}
        {level && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
            <div className={`
              h-full transition-all duration-700 ease-out
              ${getLevelColor(level)} ${getLevelWidth(level)}
              ${isVisible ? 'scale-x-100' : 'scale-x-0'}
            `} 
            style={{ 
              transformOrigin: 'left',
              transitionDelay: `${index * 60 + 200}ms` 
            }} />
          </div>
        )}
      </div>
      
      {/* Enhanced Tooltip */}
      <div className={`
        absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 sm:px-3 sm:py-2
        bg-gray-900 text-white text-xs sm:text-sm rounded-lg pointer-events-none
        transition-all duration-300 ease-out z-20 whitespace-nowrap
        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}>
        <div className="font-medium">{name}</div>
        {level && (
          <div className="text-xs text-gray-300 mt-0.5 hidden sm:block">{level}</div>
        )}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                       border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, description, skills }: SkillCategoryProps) => {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-2 sm:mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="w-12 sm:w-16 h-0.5 bg-blue-600 mt-3 sm:mt-4" />
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
        {skills.map((skill: Skill, index: number) => (
          <SkillIcon 
            key={`${title}-${index}`}
            {...skill} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentCategory(prev => (prev + 1) % skillCategories.length);
      }
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Crafting engaging user interfaces with modern frameworks and responsive design principles. Specializing in React ecosystem and component-based architecture.",
      skills: [
        { src: "/assets/icons/html5-original.svg", alt: "HTML5", name: "HTML5", level: "Expert" as const },
        { src: "/assets/icons/css3-original.svg", alt: "CSS3", name: "CSS3", level: "Expert" as const },
        { src: "/assets/icons/javascript-original.svg", alt: "JavaScript", name: "JavaScript", level: "Expert" as const },
        { src: "/assets/icons/typescript-original.svg", alt: "TypeScript", name: "TypeScript", level: "Advanced" as const },
        { src: "/assets/icons/react-original.svg", alt: "React", name: "React", level: "Expert" as const },
        { src: "/assets/icons/nextjs-original.svg", alt: "Next.js", name: "Next.js", level: "Advanced" as const },
        { src: "/assets/icons/tailwindcss-original.svg", alt: "Tailwind CSS", name: "Tailwind CSS", level: "Expert" as const },
        { src: "/assets/icons/sass-original.svg", alt: "Sass", name: "Sass", level: "Advanced" as const }
      ]
    },
    {
      title: "Backend Development",
      description: "Building scalable server-side applications with robust APIs, database design, and cloud infrastructure. Focus on performance and security.",
      skills: [
        { src: "/assets/icons/nodejs-original.svg", alt: "Node.js", name: "Node.js", level: "Expert" as const },
        { src: "/assets/icons/express-original.svg", alt: "Express", name: "Express", level: "Advanced" as const },
        { src: "/assets/icons/nestjs-original.svg", alt: "NestJS", name: "NestJS", level: "Intermediate" as const },
        { src: "/assets/icons/python-original.svg", alt: "Python", name: "Python", level: "Advanced" as const },
        { src: "/assets/icons/php-original.svg", alt: "PHP", name: "PHP", level: "Intermediate" as const },
        { src: "/assets/icons/mysql-original.svg", alt: "MySQL", name: "MySQL", level: "Advanced" as const },
        { src: "/assets/icons/postgresql-original.svg", alt: "PostgreSQL", name: "PostgreSQL", level: "Advanced" as const },
        { src: "/assets/icons/mongodb-original.svg", alt: "MongoDB", name: "MongoDB", level: "Advanced" as const }
      ]
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with native performance and intuitive user experiences across iOS and Android platforms.",
      skills: [
        { src: "/assets/icons/flutter-original.svg", alt: "Flutter", name: "Flutter", level: "Advanced" as const },
        { src: "/assets/icons/dart-original.svg", alt: "Dart", name: "Dart", level: "Advanced" as const },
        { src: "/assets/icons/react-original.svg", alt: "React Native", name: "React Native", level: "Intermediate" as const },
        { src: "/assets/icons/android-original.svg", alt: "Android", name: "Android", level: "Intermediate" as const },
        { src: "/assets/icons/swift-original.svg", alt: "Swift", name: "Swift", level: "Beginner" as const },
        { src: "/assets/icons/firebase-plain.svg", alt: "Firebase", name: "Firebase", level: "Advanced" as const }
      ]
    },
    {
      title: "DevOps & Cloud",
      description: "Managing deployment pipelines, containerization, and cloud infrastructure for scalable and reliable application delivery.",
      skills: [
        { src: "/assets/icons/docker-original.svg", alt: "Docker", name: "Docker", level: "Advanced" as const },
        { src: "/assets/icons/kubernetes-plain.svg", alt: "Kubernetes", name: "Kubernetes", level: "Intermediate" as const },
        { src: "/assets/icons/googlecloud-original.svg", alt: "Google Cloud", name: "Google Cloud", level: "Intermediate" as const },
        { src: "/assets/icons/nginx-original.svg", alt: "Nginx", name: "Nginx", level: "Advanced" as const },
        { src: "/assets/icons/jenkins-original.svg", alt: "Jenkins", name: "Jenkins", level: "Intermediate" as const }
      ]
    },
    {
      title: "Design & Tools",
      description: "Creating compelling visual designs and utilizing development tools for efficient workflow and collaborative development processes.",
      skills: [
        { src: "/assets/icons/figma-original.svg", alt: "Figma", name: "Figma", level: "Expert" as const },
        { src: "/assets/icons/photoshop-plain.svg", alt: "Photoshop", name: "Photoshop", level: "Advanced" as const },
        { src: "/assets/icons/vscode-original.svg", alt: "VS Code", name: "VS Code", level: "Expert" as const },
        { src: "/assets/icons/git-original.svg", alt: "Git", name: "Git", level: "Expert" as const },
        { src: "/assets/icons/github-original.svg", alt: "GitHub", name: "GitHub", level: "Expert" as const },
        { src: "/assets/icons/jira-original.svg", alt: "Jira", name: "Jira", level: "Advanced" as const }
      ]
    }
  ];

  const nextCategory = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentCategory(prev => (prev + 1) % skillCategories.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevCategory = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentCategory(prev => (prev - 1 + skillCategories.length) % skillCategories.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToCategory = (index: number) => {
    if (!isTransitioning && index !== currentCategory) {
      setIsTransitioning(true);
      setCurrentCategory(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Enhanced Header */}
        <div 
          ref={titleRef}
          className={`
            mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ease-out
            ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              A comprehensive overview of my technical skills spanning frontend, backend, mobile development, 
              and modern development tools. Each skill reflects real-world project experience and continuous learning.
            </p>
          </div>
        </div>

        {/* Skills Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevCategory}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -ml-4 sm:-ml-6"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextCategory}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -mr-4 sm:-mr-6"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentCategory * 100}%)` }}
            >
              {skillCategories.map((category, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4 md:px-8">
                  <SkillCategory {...category} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCategory(index)}
                disabled={isTransitioning}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentCategory 
                    ? 'bg-blue-600 w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Category Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <span className="text-xs sm:text-sm text-gray-500">
              {currentCategory + 1} / {skillCategories.length}
            </span>
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`
          mt-12 sm:mt-16 md:mt-20 p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100
          transition-all duration-700 ease-out
          ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `} style={{ transitionDelay: '1s' }}>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">Skills Overview</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <div>
              <p className="mb-2"><span className="font-medium">Years of Experience:</span> 5+ years in web development</p>
              <p className="mb-2"><span className="font-medium">Specialization:</span> Full-stack JavaScript development</p>
              <p><span className="font-medium">Focus Areas:</span> React ecosystem, Node.js, cloud deployment</p>
            </div>
            <div>
              <p className="mb-2"><span className="font-medium">Learning Philosophy:</span> Continuous improvement and staying current with industry trends</p>
              <p><span className="font-medium">Collaboration:</span> Experienced with agile development and cross-functional teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}