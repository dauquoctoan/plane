export interface IPropsComponent {
  nextStep?: () => void;
  prevStep?: () => void;
  isLabels?: boolean;
  defaultCountMemners?: number;
  textSubmit?: string;
  onSubmitted?: (a: unknown) => void;
  isSetup?: boolean;
}
