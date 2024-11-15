import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../demo-ui/components/dialog";
import { Button } from "../../demo-ui/components/button";
import { X } from "lucide-react";

interface WalletOption {
  id: string;
  name: string;
}

interface WalletSelectorUIProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWallet: (walletId: string) => void;
  walletOptions: WalletOption[];
}

export const WalletSelectorModal: React.FC<WalletSelectorUIProps> = ({
  isOpen,
  onClose,
  onSelectWallet,
  walletOptions,
}) => {
  const capsuleOption = walletOptions.find((opt) => opt.id === "capsule");
  const walletConnectOptions = walletOptions.filter((opt) => opt.id !== "capsule");

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">Connect a Wallet</DialogTitle>
            <Button
              variant="ghost"
              className="w-8 h-8 p-0"
              onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Capsule Section */}
          {capsuleOption && (
            <div>
              <h3 className="text-sm text-gray-500 mb-2">Log In With Email</h3>
              <Button
                onClick={() => onSelectWallet(capsuleOption.id)}
                className="w-full flex items-center justify-start gap-3 py-6 px-4 bg-white hover:bg-gray-50 text-black border rounded-lg">
                <span>Sign in with {capsuleOption.name}</span>
              </Button>
            </div>
          )}

          {/* Other Wallets Section */}
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Log In With Wallet</h3>
            <div className="space-y-2">
              {walletConnectOptions.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => onSelectWallet(option.id)}
                  className="w-full flex items-center justify-start gap-3 py-6 px-4 bg-white hover:bg-gray-50 text-black border rounded-lg">
                  <span>{option.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-sm text-gray-500">New to Ethereum wallets?</span>
          <Button
            variant="link"
            className="text-purple-600 hover:text-purple-700">
            Learn More
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
