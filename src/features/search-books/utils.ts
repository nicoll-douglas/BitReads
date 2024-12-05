export function isValidPageParam(
  value: string | string[] | undefined
): [false] | [true, number] {
  if (!value) return [false];
  if (Array.isArray(value)) return [false];

  const asNumber = Number.parseInt(value);
  if (Number.isNaN(asNumber)) return [false];
  if (asNumber < 1) return [false];

  return [true, asNumber];
}

export function isValidQueryParam(
  value: string | string[] | undefined
): [false] | [true, string] {
  if (!value) return [false];
  if (Array.isArray(value)) return [false];
  return [true, value];
}
