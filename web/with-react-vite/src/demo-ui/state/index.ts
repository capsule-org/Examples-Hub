import { atom } from "jotai";
import { AuthOptionType, SigningOptionType } from "../types";

export const countryCodeAtom = atom<string>("");
export const currentStepAtom = atom<number>(0);
export const disableNextAtom = atom<boolean>(false);
export const disablePrevAtom = atom<boolean>(false);
export const emailAtom = atom<string>("");
export const isLoadingAtom = atom<boolean>(false);
export const isLoggedInAtom = atom<boolean>(false);
export const phoneNumberAtom = atom<string>("");
export const selectedAuthAtom = atom<AuthOptionType | "">("");
export const selectedSignerAtom = atom<SigningOptionType>("capsule-client");
export const signatureAtom = atom<string>("");
export const verificationCodeAtom = atom<string>("");
