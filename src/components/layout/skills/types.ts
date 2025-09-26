export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";

export interface Skill {
    src: string;
    alt: string;
    name: string;
    level?: SkillLevel;
}

export interface SkillIconProps extends Skill {
    index: number;
}

export interface SkillCategoryProps {
    title: string;
    description: string;
    skills: Skill[];
}