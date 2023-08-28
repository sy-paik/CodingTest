function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    return Array.from(s).every(char => !isNaN(Number(char)));
}