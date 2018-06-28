export function formatCategory(category){
  const formated = category.replace(/_/g, ' ');
  return formated;
}

export function getRandom(all, n){
  let random = all;
  for(let i = all.length - 1; i> 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [random[i], random[j]] = [random[j], random[i]];
  }
  random = random.slice(0,n)
  return random;
}
