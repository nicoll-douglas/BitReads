export default function genIds(number: number) {
  return Array.from({ length: number }, () => crypto.randomUUID());
}
