const to = (promise) => {
  return promise.then((res) => [null, res]).catch((error) => [error])
}
export default to
