function solution(s) {
    let n = s.split("");
    n.sort();
    n.reverse();
    let i = n.join('');
    console.log(n.join(''))
    return i;
}