function solution(n){
    
    let answer = 0;
    let a = String(n);
    
    for(i = 0; i < a.length; i++){
        answer += Number(a[i])
    }
    return answer;
}