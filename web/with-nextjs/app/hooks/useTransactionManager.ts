import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { capsuleClient } from ".capsuleClient";

const useTransactionManager = () => {
  const [to, setTo] = useState<ethers.AddressLike>("");
  const [value, setValue] = useState<string>("");
  const [nonce, setNonce] = useState<string>("");
  const [gasLimit, setGasLimit] = useState<string>("");
  const [gasPrice, setGasPrice] = useState<string>("");
  const [isValid, setIsValid] = useState(false);
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
          setGasPrice(
            gasPriceData.gasPrice
              ? ethers.formatUnits(gasPriceData.gasPrice, "ether")
              : ethers.formatUnits("20000000000", "wei")
          );
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
    const isValueValid = /^\d*\.?\d+$/.test(value) && ethers.parseUnits(value, "ether") > 0n;
    const isNonceValid = /^\d+$/.test(nonce) && parseInt(nonce, 10) >= 0;
    const isGasLimitValid = /^\d*\.?\d+$/.test(gasLimit) && ethers.parseUnits(gasLimit, "wei") > 0n;
    const isGasPriceValid = /^\d*\.?\d+$/.test(gasPrice) && ethers.parseUnits(gasPrice, "ether") > 0n;

    setIsValid(isToValid && isValueValid && isNonceValid && isGasLimitValid && isGasPriceValid);
  }, [to, value, nonce, gasLimit, gasPrice]);

  return {
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
    fromAddress,
  };
};

export default useTransactionManager;
