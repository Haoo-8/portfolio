interface CardSkillsProps {
  iconClass: string;
  iconColor: string;
  title: string;
  skills: string[];
}

export default function CardSkill(props: CardSkillsProps) {
  const { iconClass, iconColor, title, skills } = props;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className={`text-4xl ${iconColor} mb-4 transform hover:scale-110 transition-transform duration-300`}>
        <i className={iconClass}></i>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className="fas fa-check-circle text-green-500 mr-2"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
