declare module 'quill' {
  export default class Quill {
    constructor(container: any, options?: any);
    setContents(delta: any): void;
    getContents(): any;
  }

  export interface Delta {
    
  }
}

  