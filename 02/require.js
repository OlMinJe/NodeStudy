require("./var");
console.log(require);

/**
 * 위의 코드를 실행하면, 밑의 결과를 확인할 수 있다.
 * - node require 명령어를 실행한게 밑의 main이 된다.
 *   즉, require.main으로 어떤 파일을 실행할 것인지 알아낼 수 있다.
 * - cache는 효율을 위해 넣어둔 것이다.
 *   최초 실행은 파일에서 가져오고, 두 번째 부터는 캐시에 저장된 파일을 가져온다.
 * 
 * [Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: {
    id: '.',
    path: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02',
    exports: {},
    filename: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\require.js',
    loaded: false,
    children: [ [Object] ],
    paths: [
      'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\node_modules',
      'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\node_modules',
      'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\node_modules',
      'c:\\Users\\LEEMINJE\\Documents\\GitHub\\node_modules',
      'c:\\Users\\LEEMINJE\\Documents\\node_modules',
      'c:\\Users\\LEEMINJE\\node_modules',
      'c:\\Users\\node_modules',
      'c:\\node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\require.js': {
      id: '.',
      path: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02',
      exports: {},
      filename: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\require.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\var.js': {
      id: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\var.js',
      path: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02',
      exports: [Object],
      filename: 'c:\\Users\\LEEMINJE\\Documents\\GitHub\\NodeStudy\\NodeStudy\\02\\var.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  }
}
 */
