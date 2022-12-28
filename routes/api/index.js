const router = require('express').Router();

router.use('/test-users', require('./test-users'));

module.exports = router;