import express from 'express';
import router from './router.js';

const application = express();
const APP_PORT = 4250;

function middlewareTest(req, res, next) {
  req.middlewareData = 'Testing middleware';
  next();
}

application.use(middlewareTest);
application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use(router);

application.listen(APP_PORT, () => {
  console.log('app is running on port 4250...');
});