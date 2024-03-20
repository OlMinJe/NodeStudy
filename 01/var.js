const odd = "홀수";
const even = "짝수";

module.exports = {
  odd,
  even,
};

// 위의 코드와 같은 의미
// exports.odd = odd;
// exports.even = even;

// 마찬가지로 같은 의미이지만, 함수를 내보낼 때는 문제가 생긴다.
// module.exports === exports === { odd, even }
