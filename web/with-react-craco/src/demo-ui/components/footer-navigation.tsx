import React from "react";
import { useAtom } from "jotai";
import { Button } from "./button";
import {
  countryCodeAtom,
  currentStepAtom,
  disableNextAtom,
  disablePrevAtom,
  emailAtom,
  isLoadingAtom,
  phoneNumberAtom,
  selectedAuthAtom,
  selectedSignerAtom,
  signatureAtom,
  verificationCodeAtom,
} from "../state";

type FooterNavigationProps = {};

const FooterNavigation: React.FC<FooterNavigationProps> = () => {
  const [isLoading] = useAtom(isLoadingAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [disablePrev, setDisablePrev] = useAtom(disablePrevAtom);
  const [disableNext, setDisableNext] = useAtom(disableNextAtom);
  const [, setSelectedAuth] = useAtom(selectedAuthAtom);
  const [, setEmail] = useAtom(emailAtom);
  const [, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [, setCountryCode] = useAtom(countryCodeAtom);
  const [, setVerificationCode] = useAtom(verificationCodeAtom);
  const [, setSignature] = useAtom(signatureAtom);
  const [, setSelectedSigner] = useAtom(selectedSignerAtom);
  const [, setIsLoading] = useAtom(isLoadingAtom);

  const resetAllStates = () => {
    setCurrentStep(0);
    setSelectedAuth("");
    setSelectedSigner("capsule-client");
    setEmail("");
    setPhoneNumber("");
    setCountryCode("");
    setVerificationCode("");
    setSignature("");
    setIsLoading(false);
    setDisableNext(false);
    setDisablePrev(false);
  };

  return (
    <div className="mt-8 border-t border-border pt-4 animate-fade-in fill-both delay-4">
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          className={`transition-smooth ${
            currentStep === 0 || disablePrev || isLoading
              ? "text-muted-foreground"
              : "text-secondary hover:text-secondary-foreground hover:bg-secondary/90"
          }`}
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 0 || disablePrev || isLoading}>
          Previous
        </Button>
        {currentStep === 5 ? (
          <Button
            variant="destructive"
            className={`transition-smooth ${isLoading || disableNext ? "opacity-50" : "hover:bg-destructive/90"}`}
            onClick={resetAllStates}
            disabled={isLoading || disableNext}>
            Reset
          </Button>
        ) : (
          <Button
            variant="default"
            className={`transition-smooth ${
              disableNext || isLoading ? "opacity-50" : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={disableNext || isLoading}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default FooterNavigation;
