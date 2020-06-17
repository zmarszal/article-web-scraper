const router = require('express').Router()
module.exports = router

router.use('/home', require('./home'))
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  console.log("hello")
  next(error)
})
