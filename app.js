import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitController from './controllers/tuits/tuits-controller.js';

const app = express()
app.listen(process.env.PORT || 4000);
app.use(cors())
app.use(express.json())
HelloController(app)
UserController(app)
TuitController(app)

app.listen(4000)