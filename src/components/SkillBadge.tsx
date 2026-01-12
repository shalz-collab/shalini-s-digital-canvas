interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <span className="skill-badge">{skill}</span>;
};

export default SkillBadge;
