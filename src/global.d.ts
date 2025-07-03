/** @format */

// This file enables TypeScript to recognize SCSS modules
// Place this in your src directory as global.d.ts or in the same folder as your SCSS modules

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
