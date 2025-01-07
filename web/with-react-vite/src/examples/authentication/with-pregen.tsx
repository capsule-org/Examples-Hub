import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { WalletType } from "@usecapsule/web-sdk";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom } from "../../demo-ui/state";
import { Button } from "../../demo-ui/components/button";
import { Input } from "../../demo-ui/components/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../demo-ui/components/card";

type AuthWithPreGenProps = {};

const AuthWithPreGen: React.FC<AuthWithPreGenProps> = () => {
  const [step, setStep] = useState(0);
  const [identifier, setIdentifier] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  useEffect(() => {
    const checkPregenWallet = async () => {
      setIsLoading(true);
      try {
        const storedWallet = localStorage.getItem("pregenWallet");
        if (storedWallet) {
          await capsuleClient.setUserShare(storedWallet);
          setIsAuthenticated(true);
          setStep(1);
          setDisableNext(false);
        }
      } catch (err) {
        console.error("Error checking pregen wallet:", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkPregenWallet();
  }, []);

  useEffect(() => {
    if (isAuthenticated && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isAuthenticated, step]);

  const handleCreatePregenWallet = async () => {
    setIsLoading(true);
    try {
      const newIdentifier = identifier.includes("@") ? identifier : `${identifier}@test.usecapsule.com`;
      await capsuleClient.createWalletPreGen(WalletType.EVM, newIdentifier);

      const userShare = await capsuleClient.getUserShare();
      if (!userShare) {
        throw new Error("Failed to get user share");
      }
      localStorage.setItem("pregenWallet", userShare);
      setIsAuthenticated(true);
      setStep(1);
    } catch (err) {
      console.error("Error creating pregen wallet:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{isAuthenticated ? "Welcome" : "Create Pregen Wallet"}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your identifier (e.g., email)"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
              <Button
                onClick={handleCreatePregenWallet}
                className="w-full"
                disabled={isLoading || !identifier}>
                {isLoading ? "Loading..." : "Create Wallet"}
              </Button>
            </div>
          )}
          {step === 1 && (
            <div>
              <p className="text-green-600 font-semibold">
                Pregen wallet created and authenticated successfully! Click 'Next' to proceed.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthWithPreGen;
