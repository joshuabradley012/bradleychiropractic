export function removeUndefined(object) {
  return Object.fromEntries(
    Object.entries(object).filter(([, v]) => typeof v !== "undefined")
  );
}

