import type { SkillCategoryProps } from "./types";
import SkillIcon from "./SkillIcon";

export default function SkillCategory({ title, description, skills }: SkillCategoryProps) {
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
        {skills.map((skill, index) => (
          <SkillIcon key={`${title}-${index}`} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
}
