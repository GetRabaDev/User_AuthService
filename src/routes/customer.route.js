const express = require('express');
const { verify } = require('../middleware/verifyToken');
const { signUpValidate } = require('../validations/user.validations');
const {
  getUserDetails,
  listAllUsers,
  updateUser,
} = require('../controller/user.controller');

const router = express.Router();

router.use(verify);

// learning
router.get('/details/:id', verify, getUserDetails);

router.get('/list-all', verify, listAllUsers);

router.patch('/update-user/:id', verify, updateUser);

module.exports = router;
