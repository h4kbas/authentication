export default {
  app: {
    port: 80
  },
  session: {
    secret: 'some secure stuff',
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
  },
  template: {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
  }
}