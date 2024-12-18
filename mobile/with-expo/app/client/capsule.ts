import { CapsuleMobile, Environment } from "@usecapsule/react-native-wallet";

export const capsuleClient = new CapsuleMobile(Environment.BETA, "dd4d7071735029ce97dce17969e82ad6", undefined, {
  disableWorkers: true,
});
