/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
    let i = 1;
    let sum =1;
    while(true){
        sum=sum*i;
         i++; 
    
        if(sum>n)
            return i-2;
  
    }
}