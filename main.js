function matrixElementsSum(matrix) {
  let count = 0;
  for(let i = 0 ; i < matrix.length; i++ ){
    for(let j = 0 ; j < matrix[0].length; j++){
      if(matrix[i][j] == 0  && i+1 < matrix.length) {
        matrix[i+1][j] = 0;
      }
      count += matrix[i][j];
    }
  }
  return count;
}
let matrix = 
  [[0,1,1,2], 
 [0,5,0,0], 
 [2,0,3,3]]
console.log(matrixElementsSum(matrix))
