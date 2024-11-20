import { atom } from "jotai";
import { AuthOption, SigningOption } from "../types";

export const currentStepAtom = atom<number>(0);
export const selectedAuthAtom = atom<AuthOption | "">("");
export const selectedSignerAtom = atom<SigningOption>("capsule-client");
export const emailAtom = atom<string>("");
export const phoneNumberAtom = atom<string>("");
export const countryCodeAtom = atom<string>("");
export const verificationCodeAtom = atom<string>("");
export const signatureAtom = atom<string>("");
export const isLoadingAtom = atom<boolean>(false);
export const disableNextAtom = atom<boolean>(false);
export const disablePrevAtom = atom<boolean>(false);
export const isLoggedInAtom = atom<boolean>(false);
