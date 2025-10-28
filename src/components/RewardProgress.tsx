import { Progress } from "@/components/ui/progress";

type RewardProgressProps = {
  title: string;
  value?: number;
};

const RewardProgress = ({ title, value = 30 }: RewardProgressProps) => {
  return (
    <div className="text-center space-y-4 mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-foreground text-xl font-semibold">{title}</h2>
        <span className="text-success text-xl font-bold">{value}%</span>
      </div>
      <div className="w-full mx-auto relative">
        <Progress value={value} className="h-4 shadow-glow" />
        <div className="absolute -top-1 left-0 w-full h-6 bg-gradient-to-r from-success/20 via-success/10 to-transparent rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default RewardProgress;