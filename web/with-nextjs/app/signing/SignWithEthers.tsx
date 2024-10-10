import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { CapsuleEthersSigner } from "@usecapsule/ethers-v6-integration";
import { ethers, TransactionRequest } from "ethers";
import { capsuleClient } from ".capsuleClient";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from ".components/ui/alert";
import { Button } from "@interchain-ui/react";
import { Label } from ".components/ui/label";
import { Input } from ".components/ui/input";

type SignWithEthersProps = {};

const SignWithEthers: React.FC<SignWithEthersProps> = () => {
  const [to, setTo] = useState<ethers.AddressLike>("");
  const [value, setValue] = useState<string>("");
  const [nonce, setNonce] = useState<string>("");
  const [gasLimit, setGasLimit] = useState<string>("");
  const [gasPrice, setGasPrice] = useState<string>("");
  const [isValid, setIsValid] = useState(false);
  const [signatureResult, setSignatureResult] = useState<string>("");
  const [fromAddress, setFromAddress] = useState<ethers.AddressLike>("");

  useEffect(() => {
    const fetchFromAddress = async () => {
      try {
        const wallets = await capsuleClient.getWallets();
        const wallet = Object.values(wallets)[0];
        const address = wallet.address!;
        setFromAddress(address);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      }
    };

    fetchFromAddress();
  }, []);

  useEffect(() => {
    if (fromAddress) {
      setTo(fromAddress);
      setValue("10000000000000000");
      setGasLimit("21000");
      const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
      const fetchDefaults = async () => {
        try {
          const gasPriceData = await provider.getFeeData();
          setGasPrice(gasPriceData.gasPrice ? gasPriceData.gasPrice.toString() : "20000000000");
          const nonceValue = await provider.getTransactionCount(fromAddress);
          setNonce(nonceValue.toString());
        } catch (error) {
          console.error("Error fetching default gasPrice and nonce:", error);
        }
      };
      fetchDefaults();
    }
  }, [fromAddress]);

  useEffect(() => {
    const isToValid = ethers.isAddress(to);
    const isValueValid = /^\d+$/.test(value) && ethers.toBigInt(value) > 0n;
    const isNonceValid = /^\d+$/.test(nonce) && ethers.toBigInt(nonce) >= 0n;
    const isGasLimitValid = /^\d+$/.test(gasLimit) && ethers.toBigInt(gasLimit) > 0n;
    const isGasPriceValid = /^\d+$/.test(gasPrice) && ethers.toBigInt(gasPrice) > 0n;

    setIsValid(isToValid && isValueValid && isNonceValid && isGasLimitValid && isGasPriceValid);
  }, [to, value, nonce, gasLimit, gasPrice]);

  const handleSign = async () => {
    if (isValid) {
      try {
        const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");

        const capsuleEthersSigner = new CapsuleEthersSigner(capsuleClient, provider);

        const demoTx: TransactionRequest = {
          from: fromAddress,
          to: to,
          value: ethers.parseUnits(value, "wei"),
          nonce: parseInt(nonce),
          gasLimit: parseInt(gasLimit),
          gasPrice: ethers.parseUnits(gasPrice, "wei"),
        };

        const signedTx = await capsuleEthersSigner.signTransaction(demoTx);
        setSignatureResult(signedTx);
        console.log("Transaction signed:", signedTx);
      } catch (error) {
        console.error("Error during signing:", error);
      }
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Configure Transaction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="from">From Address</Label>
          <Input
            id="from"
            value={fromAddress.toString()}
            readOnly
          />
        </div>
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
        <div className="space-y-2">
          <Label htmlFor="value">Value (in wei)</Label>
          <Input
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="0"
          />
          {value && (!/^\d+$/.test(value) || ethers.toBigInt(value) <= 0n) && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              Value must be a positive integer
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="nonce">Nonce</Label>
          <Input
            id="nonce"
            value={nonce}
            onChange={(e) => setNonce(e.target.value)}
            placeholder="0"
          />
          {nonce && !/^\d+$/.test(nonce) && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              Nonce must be a non-negative integer
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="gasLimit">Gas Limit</Label>
          <Input
            id="gasLimit"
            value={gasLimit}
            onChange={(e) => setGasLimit(e.target.value)}
            placeholder="21000"
          />
          {gasLimit && (!/^\d+$/.test(gasLimit) || parseInt(gasLimit) <= 0) && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              Gas limit must be a positive integer
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="gasPrice">Gas Price (in wei)</Label>
          <Input
            id="gasPrice"
            value={gasPrice}
            onChange={(e) => setGasPrice(e.target.value)}
            placeholder="20000000000"
          />
          {gasPrice && (!/^\d+$/.test(gasPrice) || parseInt(gasPrice) <= 0) && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              Gas price must be a positive integer
            </p>
          )}
        </div>
        {signatureResult && (
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Transaction Signed</AlertTitle>
            <AlertDescription>
              <p>From: {fromAddress.toString()}</p>
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

export default SignWithEthers;
