const {Router} = require('express');
const { home } = require('../controller/user.controller');

const router = Router();

router.get("/",home)


module.exports={router}