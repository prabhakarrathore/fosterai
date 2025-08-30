declare module 'particles.js' {
    export function particlesJS(tagId: string, params: any): void;
    export function particlesJS(params: any): void;
    export function load(tagId: string, pathConfigJson: string, callback: () => void): void;
  }
  