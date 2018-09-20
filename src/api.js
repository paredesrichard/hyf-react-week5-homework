export function fetchSpaceXData(searchParam) {
  const url = `https://api.spacexdata.com/v2${searchParam}`;
  //console.log("fetching url", url);
  return fetch(url).then(response => response.json());
}