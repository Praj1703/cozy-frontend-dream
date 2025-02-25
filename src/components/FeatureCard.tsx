
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="group p-6 rounded-2xl bg-dark-purple/50 backdrop-blur-sm border border-purple-800/20 hover:border-purple-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="h-12 w-12 rounded-xl bg-purple-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
