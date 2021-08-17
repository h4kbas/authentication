import session from "express-session";
import uuid from "uuid";

export default function () {
  session({
    genid: function (req) {
      return uuid.v1();
    },
    secret: 'keyboard cat'
  })
}