const dep1 = require("./dep1");
const dep2 = require("./dep2");
dep1();
dep2();

/**
 * 노드에서는 순환 참조를 인식하여 막기 때문에 빈 객체로 출력된다.
require dep1 {}
require dep2 [Function (anonymous)]
dep2 [Function (anonymous)]
dep1 {}
 */
