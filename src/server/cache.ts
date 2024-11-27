let cache: { [key: string]: unknown } = {};

const get = (key: string) => {
  if (key in cache) {
    return cache[key];
  }

  return null;
};

const set = (key: string, value: unknown) => {
  cache[key] = value;
};

const remove = (key: string) => delete cache[key];

const clear = () => (cache = {});

const reveal = () => Object.freeze(cache);

export { get, set, remove, clear, reveal };
