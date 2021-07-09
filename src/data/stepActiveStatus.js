export const steps = [
  {
    id: 1,
    step: 'PolicyHolderDetail'
  },
  {
    id: 2,
    step: 'SelectQuote'
  }
];

let currentStep = 1;

export function setStep(step) {
  currentStep = step;
}

export function isActive(step) {
  return step === currentStep;
}
