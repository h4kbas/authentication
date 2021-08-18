
import App from "./app";
import config from "./config";

import RootC from "./controllers/root";

import SessionM from "./middlewares/session";
async function main() {
  const authapp = new App();

  await authapp.initializeDatabase("auth");
  authapp.initializeSession();
  authapp.initializeTemplate();
  authapp.initializeBodyParser();


  authapp.registerController('/', RootC);

  authapp.registerMiddleware(SessionM);
  //authapp.registerMiddleware();

  authapp.listen(config.app.port, () => {
    console.log(`Auth at http://localhost:${config.app.port}`)
  });
}

main();

