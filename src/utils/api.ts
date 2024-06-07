export const paramToQuery = (param?: unknown) =>
  param ? `${param}=${param}` : "";
