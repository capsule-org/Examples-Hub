declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?react";
{
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
