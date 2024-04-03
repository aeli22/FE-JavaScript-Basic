/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    let small= Infinity;
      let x;
      
      if(arr.length!=1){ 
      for(let i=0;i<arr.length;i++){
        
          if(small>arr[i]){
              small=arr[i]; 
          x=i;
          }
          
          
      
         }
    arr.splice(x,1);
  return arr;
      
      }
      else
          arr=[-1];
          return arr;
  }