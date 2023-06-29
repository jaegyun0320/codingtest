function solution(s) {
    let answer = '';
    for(i=0; i < s.length; i++){
        if(s.length%2 === 0){
            answer = s[s.length /2 - 1]  + s[s.length/2]; 
        }
        else {
            answer = s[Math.floor (s.length / 2)];
        }
    
    }
    return answer;
}