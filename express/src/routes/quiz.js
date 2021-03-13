const router = require('express').Router();
const quizController = require('../controller/quizController');

router.get('/', quizController.Listarquiz);


module.exports = router;