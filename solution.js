function betterThanAverage(classPoints, yourPoints) {
  classPoints.sort();
  
  let lowPoints = 0;
  
  for(let i = 0; i < classPoints.length; i++) {
    if(classPoints[i] < yourPoints)
      lowPoints++;
  }
  
  const averagePoints = classPoints.length / 2;
  
  if(averagePoints <= lowPoints)
    return true;
  else
    return false;
}
