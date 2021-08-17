export default {
  app: {
    port: 80
  },
  session: {
    secret: 'some secure stuff',
    cookie: { secure: true }
  },
  template: {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
  }
}