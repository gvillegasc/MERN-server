const express = require('express');
const UserController = require('../controllers/user.controller');

const api = express.Router();

api.post('/sign-up', UserController.signUp);

module.exports = api;
