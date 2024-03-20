const parseQueryString = (queryString) => {
  const queryParams = {};
  const pairs = queryString.substring(1).split("&");

  for (let pair of pairs) {
    let [key, value] = pair.split("=");
    key = decodeURIComponent(key);
    value = decodeURIComponent(value || "");

    if (!queryParams.hasOwnProperty(key)) {
      queryParams[key] = value;
    } else {
      if (!Array.isArray(queryParams[key]))
        queryParams[key] = [queryParams[key], value];
      else queryParams[key].push(value);
    }
  }

  return queryParams;
};

let queryString = "?A=B&A=D&E=F";
let queryParams = parseQueryString(queryString);
console.log(queryParams);
