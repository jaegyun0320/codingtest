function solution(s){
    
    let county = 0;
    let countp = 0;
    
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'y' || s[i] === 'Y'){
            county++;
        }
        else if(s[i] === 'p' || s[i] === 'P'){
            countp++;
        }   
    }
    return countp === county ? true : false;
}