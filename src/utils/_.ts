type KeyFn = (item: any) => string;

const defaultKeyFn: KeyFn = item => item.id;

export const toObject = (array: any[], keyFn: KeyFn = defaultKeyFn) =>
  array.reduce((acc: any, val: any) => ({...acc, [keyFn(val)]: val}), {});
