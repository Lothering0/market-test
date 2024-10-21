import { OmitMethods } from './omit-methods.type';

/** Converts model to plain object */
export const toPlain = <T>(value: T): OmitMethods<T> => JSON.parse(JSON.stringify(value));
