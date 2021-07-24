const corsAnywhere = require('cors-anywhere')
const CORS_PROXY_PORT = 5000
// Create CORS server
corsAnywhere.createServer({}).listen(CORS_PROXY_PORT, () => {
  console.log(
    `Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`,
  )
})
