type HTTPStatusCode=[number,string]

const OKStatus1:HTTPStatusCode = [200,"OK"]
const notFound1:HTTPStatusCode = [404,"Not Found"]
const badRequest1:HTTPStatusCode = [400,"Bad Request"]
const serverErr1:HTTPStatusCode = [500,"Internal Server Error"]

console.log(OKStatus1)
console.log(notFound1)
console.log(badRequest1)
console.log(serverErr1)