function solution(a, b) {
    let answer = 0;
    
    if(a<b){
        for(let i = a ; i <=b; i++){
            answer += i;
        }
    }
    else if(b<a){
        for(let i = b; i <=a; i++){
            answer += i;
        }
    }
    else if(a=b){
        answer = a;
    }
    return answer;
}