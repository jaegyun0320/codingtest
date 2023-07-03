function solution(array, commands) {
    let answer = [];
    let bbb = []; // array.slice값을 넣는다.
    for(i = 0; i < commands.length; i++){
        bbb = array.slice(commands[i][0]-1, commands[i][1]);
        //console.log(array.slice(commands[i][0]-1, commands[i][1]))//slice를 이용해 배열 자르기
        bbb.sort((a,b)=>a-b);// 오름차순 정렬
        
        answer.push(bbb[commands[i][2]-1]); //bbb에 k-1의 값을 answer에 집어넣는다. 
    }
    return answer;
}