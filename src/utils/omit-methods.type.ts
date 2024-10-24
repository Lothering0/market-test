/** Returns type without methods */
export type OmitMethods<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : T[K];
};
