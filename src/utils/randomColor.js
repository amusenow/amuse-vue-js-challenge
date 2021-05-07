export function getRandomColor(seed = 1){
  const random =  (Math.random() * seed) % 1;

  const H = 360 * Math.random();
  const S = 90;
  const L = 50 + 15 * random;
  return `hsl(${H},${S}%,${L}%)`;
}
