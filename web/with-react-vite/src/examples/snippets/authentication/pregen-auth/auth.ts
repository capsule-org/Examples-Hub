import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import components and types for pregen wallet",
    code: `
import React, { useState, useEffect } from "react";
import { WalletType } from "@usecapsule/web-sdk";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Implement pregen wallet authentication",
    subtitle: "Create component with wallet creation and storage",
    code: `
const PregenWalletAuth: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkPregenWallet = async () => {
      const storedWallet = localStorage.getItem("pregenWallet");
      if (storedWallet) {
        await capsuleClient.setUserShare(storedWallet);
        setIsAuthenticated(true);
      }
    };
    checkPregenWallet();
  }, []);

  const handleCreatePregenWallet = async () => {
    try {
      const newIdentifier = identifier.includes("@") 
        ? identifier 
        : \`\${identifier}@test.usecapsule.com\`;

      await capsuleClient.createWalletPreGen(
        WalletType.EVM,
        newIdentifier
      );

      const userShare = await capsuleClient.getUserShare();
      if (!userShare) {
        throw new Error("Failed to get user share");
      }

      localStorage.setItem("pregenWallet", userShare);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error creating pregen wallet:", error);
    }
  };`,
  },
  {
    title: "Create authentication UI",
    subtitle: "Implement the UI for pregen wallet creation",
    code: `
  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <input
            type="email"
            placeholder="Enter your identifier (e.g., email)"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <button 
            onClick={handleCreatePregenWallet}
            disabled={!identifier}>
            Create Wallet
          </button>
        </div>
      ) : (
        <div>Wallet created and authenticated successfully!</div>
      )}
    </div>
  );
};

export default PregenWalletAuth;`,
  },
];
