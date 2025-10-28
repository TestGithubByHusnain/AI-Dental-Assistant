import { ChevronRightIcon } from "lucide-react";

const PROGRESS_STEPS = ["Select Dentist", "Choose Time", "Confirm"];

function ProgressSteps({ currentStep }: { currentStep: number }) {
  return (
    <nav aria-label="Progress" className="flex items-center gap-4 mb-8">
      <ol className="flex items-center gap-4">
        {PROGRESS_STEPS.map((stepName, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep >= stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <li key={stepNumber} className="flex items-center gap-2">
              {/* step circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {stepNumber}
              </div>

              {/* step name */}
              <span 
                className={`text-sm ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                aria-label={`Step ${stepNumber} of ${PROGRESS_STEPS.length}: ${stepName}`}
              >
                {stepName}
              </span>

              {/* arrow (not shown for last step) */}
              {stepNumber < PROGRESS_STEPS.length && (
                <ChevronRightIcon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}export default ProgressSteps; 