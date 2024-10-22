export type ModelConstructor = new () => Record<string, any>;

export const createModel = <T extends ModelConstructor>(Model: T, object: InstanceType<T>): InstanceType<T> | null => {
  if (!object) return null;

  const model = new Model();

  Object.entries(object).forEach(([key, value]) => {
    model[key] = value;
  });

  return model as InstanceType<T>;
};