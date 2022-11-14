declare module "*.webp" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.mp4" {
  const content: any;
  export default content;
}

declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames;
}
