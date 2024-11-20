declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
