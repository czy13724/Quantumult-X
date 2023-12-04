const app = require("./scripts/app");

exports.tapped = sender => {
  app.sayHello();
}
