export default function genIds(number: number) {
  const ids: {
    [key: string]: string;
  } = {};

  for (let i = 0; i < number; i++) {
    ids[i.toString()] = crypto.randomUUID();
  }

  return ids;
}
