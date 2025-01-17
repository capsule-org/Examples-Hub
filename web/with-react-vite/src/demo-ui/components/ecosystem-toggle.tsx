import React from "react";
import { useAtom } from "jotai";
import { ecosystemFilterAtom } from "../state";
import { Switch } from "./switch";
import { Label } from "./label";

export function EcosystemToggle() {
  const [ecosystemFilter, setEcosystemFilter] = useAtom(ecosystemFilterAtom);

  const toggleEcosystem = (key: "evm" | "solana" | "cosmos") => {
    setEcosystemFilter((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex gap-6 my-4 items-center justify-center flex-wrap">
      <div className="flex items-center space-x-2">
        <Switch
          checked={ecosystemFilter.evm}
          onCheckedChange={() => toggleEcosystem("evm")}
        />
        <Label>EVM</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          checked={ecosystemFilter.solana}
          onCheckedChange={() => toggleEcosystem("solana")}
        />
        <Label>Solana</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          checked={ecosystemFilter.cosmos}
          onCheckedChange={() => toggleEcosystem("cosmos")}
        />
        <Label>Cosmos</Label>
      </div>
    </div>
  );
}