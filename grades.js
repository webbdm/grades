var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
scores.sort(function(a, b){return a - b;});

var gradeF = 0;
var gradeD = 0;
var gradeC = 0;
var gradeB = 0;
var gradeA = 0;

for (i = 0; i < scores.length; i++) {
  
  if(scores[i] < 61){
    
    gradeF += 1;
    //console.log('Grade F');
    
  }else if(scores[i] < 71){
   
    gradeD += 1;
    //console.log('Grade D');
    
  }else if(scores[i] < 81){
    
    gradeC += 1;
    //console.log('Grade C');
    
  }else if(scores[i] < 91){
   
    gradeB += 1;
    //console.log('Grade B');
    
  }else {
    
    gradeA += 1;
    //console.log("Grade A");
  }

}

//console.log(gradeF, gradeD, gradeC, gradeB, gradeA);

console.log(gradeA + " students scored an A");
console.log(gradeB + " students scored a B");
console.log(gradeC + " students scored a C");
console.log(gradeD + " students scored a D");
console.log(gradeF + " students scored an F");

console.log(scores[11] + ' was the highest score');
console.log(scores[0] + ' was the lowest score');
