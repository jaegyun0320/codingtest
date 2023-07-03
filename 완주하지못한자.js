function solution(participant, completion) {
  
    const obj = {};
    
    for(let i = 0; i < participant.length; i++){
   
        if(obj[key]){
            obj[key] ++; //동명이인을 걸러내기 위해 카운터 증가
         }
        else{
            obj[key] = 1;
        }
    }     
    for(let i = 0; i < completion.length; i++){
    
        obj[key] --; //동명이인을 걸러내기 위해 카운터 감소
    }
    for(const key in obj){ 
        if(obj[key] == 1 ){
            return key;
        }
    }
}