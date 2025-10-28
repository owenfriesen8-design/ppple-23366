import { Check } from "lucide-react";

type Step = { title: string; subtitle: string };

type QuickStartGuideProps = {
  title: string;
  steps: ReadonlyArray<Step>;
};

const QuickStartGuide = ({ title, steps }: QuickStartGuideProps) => {
  return (
    <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 backdrop-blur-sm border border-border/20">
      {title && (
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <h3 className="text-foreground text-lg sm:text-xl font-bold">{title}</h3>
          <span className="text-foreground text-lg sm:text-xl">→</span>
        </div>
      )}
      
      <div className="space-y-5 sm:space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4">
            <div className="bg-success rounded-full p-1 mt-0.5 sm:mt-1 flex-shrink-0">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-foreground" />
            </div>
            <div className="space-y-1 flex-1 min-w-0">
              <p className="text-foreground font-semibold text-base sm:text-lg leading-tight">
                {step.title}
              </p>
              {step.subtitle && (
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {step.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStartGuide;