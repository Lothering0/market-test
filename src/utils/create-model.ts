export type ModelConstructor = new () => Record<string, any>;

export const createModel = <T extends ModelConstructor>(Model: T, object: InstanceType<T>): InstanceType<T> => {
  const model = new Model();

  Object.entries(object).forEach(([key, value]) => {
    model[key] = value;
  });

  return model as InstanceType<T>;
};
