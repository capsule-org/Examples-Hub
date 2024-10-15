import React from "react";
import { ethers } from "ethers";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Button } from "./button";

type TransactionFormProps = {
  fromAddress?: ethers.AddressLike;
  to?: ethers.AddressLike;
  setTo?: (value: ethers.AddressLike) => void;
  value?: string;
  setValue?: (value: string) => void;
  nonce?: string;
  setNonce?: (value: string) => void;
  gasLimit?: string;
  setGasLimit?: (value: string) => void;
  gasPrice?: string;
  setGasPrice?: (value: string) => void;
  isValid: boolean;
  signatureResult?: string;
  handleSign: () => void;
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  fromAddress,
  to,
  setTo,
  value,
  setValue,
  nonce,
  setNonce,
  gasLimit,
  setGasLimit,
  gasPrice,
  setGasPrice,
  isValid,
  signatureResult,
  handleSign,
}) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Configure Transaction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {fromAddress !== undefined && (
          <div className="space-y-2">
            <Label htmlFor="from">From Address</Label>
            <Input
              id="from"
              value={fromAddress.toString()}
              readOnly
            />
          </div>
        )}
        {to !== undefined && setTo && (
          <div className="space-y-2">
            <Label htmlFor="to">To Address</Label>
            <Input
              id="to"
              value={to.toString()}
              onChange={(e) => setTo(e.target.value)}
              placeholder="0x..."
            />
            {to && !ethers.isAddress(to) && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Invalid Ethereum address
              </p>
            )}
          </div>
        )}
        {value !== undefined && setValue && (
          <div className="space-y-2">
            <Label htmlFor="value">Value (in ethers)</Label>
            <Input
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="0"
            />
            {value && (!/^\d*\.?\d+$/.test(value) || ethers.toBigInt(value) <= 0n) && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Value must be a positive integer
              </p>
            )}
          </div>
        )}
        {nonce !== undefined && setNonce && (
          <div className="space-y-2">
            <Label htmlFor="nonce">Nonce</Label>
            <Input
              id="nonce"
              value={nonce}
              onChange={(e) => setNonce(e.target.value)}
              placeholder="0"
            />
            {nonce && !/^\d*\.?\d+$/.test(nonce) && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Nonce must be a non-negative integer
              </p>
            )}
          </div>
        )}
        {gasLimit !== undefined && setGasLimit && (
          <div className="space-y-2">
            <Label htmlFor="gasLimit">Gas Limit</Label>
            <Input
              id="gasLimit"
              value={gasLimit}
              onChange={(e) => setGasLimit(e.target.value)}
              placeholder="21000"
            />
            {gasLimit && (!/^\d*\.?\d+$/.test(gasLimit) || parseInt(gasLimit) <= 0) && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Gas limit must be a positive integer
              </p>
            )}
          </div>
        )}
        {gasPrice !== undefined && setGasPrice && (
          <div className="space-y-2">
            <Label htmlFor="gasPrice">Gas Price (in wei)</Label>
            <Input
              id="gasPrice"
              value={gasPrice}
              onChange={(e) => setGasPrice(e.target.value)}
              placeholder="20000000000"
            />
            {gasPrice && (!/^\d*\.?\d+$/.test(gasPrice) || parseFloat(gasPrice) <= 0) && (
              <p className="text-sm text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                Gas price must be a positive integer
              </p>
            )}
          </div>
        )}
        {signatureResult && (
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Transaction Signed</AlertTitle>
            <AlertDescription>
              {fromAddress && <p>From: {fromAddress.toString()}</p>}
              <p>Transaction Hash: {signatureResult}</p>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSign}
          disabled={!isValid}
          className="w-full">
          Sign Transaction
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TransactionForm;
