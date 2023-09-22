import wrapPromise from './wrapPromise'

function fetchData(url, options) {
  const promise = fetch(url, options)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}
 
export default fetchData