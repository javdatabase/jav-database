export function createLazy(factory) {
  let value;
  let initialized = false;
  return () => {
    if (!initialized) {
      value = factory();
      initialized = true;
    }
    return value;
  };
}
