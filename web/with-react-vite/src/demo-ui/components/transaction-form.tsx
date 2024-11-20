import React from "react";
import { AlertCircle, CheckCircle2, RotateCcw } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Alert, AlertDescription } from "./alert";

type TransactionFormProps = {
  fromAddress: string;
  recipient: string;
  amount: string;
  onRecipientChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  onSign: () => void;
  onReset: () => void;
  isLoading?: boolean;
  error?: string;
  signatureResult?: string;
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  fromAddress,
  recipient,
  amount,
  onRecipientChange,
  onAmountChange,
  onSign,
  onReset,
  isLoading = false,
  error,
  signatureResult,
}) => {
  const isDisabled = isLoading || !recipient || !amount;

  if (signatureResult) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Transaction Signed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-green-50 p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-800">Successfully signed!</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="space-y-1">
                <p className="text-gray-500">From</p>
                <p className="font-mono break-all">{fromAddress}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">To</p>
                <p className="font-mono break-all">{recipient}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Amount</p>
                <p className="font-mono">{amount}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Signature</p>
                <p className="font-mono break-all">{signatureResult}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={onReset}
            className="w-full"
            variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Sign Another Transaction
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign Demo Transaction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="from">From Address</Label>
          <Input
            id="from"
            value={fromAddress}
            readOnly
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            value={recipient}
            onChange={(e) => onRecipientChange(e.target.value)}
            placeholder="Enter recipient address"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            placeholder="Enter amount"
            disabled={isLoading}
          />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSign}
          disabled={isDisabled}
          className="w-full">
          {isLoading ? "Signing..." : "Sign Transaction"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TransactionForm;
