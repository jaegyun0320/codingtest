function solution(lottos, win_nums) {
    let answer = [];
    let zero = 0;
    let win= 0;
    let rank = [6,6,5,4,3,2,1];
    
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0){
            zero++;
        }
        else{
            for(let j = 0; j < win_nums.length; j++){
                if(lottos[i] === win_nums[j]){
                    win++;
                }
            }
        }
    } 
    answer[0] = rank[win+zero]; //최고순위
    answer[1] = rank[win]; //최저순위
    return answer;
}