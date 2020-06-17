const router = require('express').Router()

router.get('/', (req, res, next) => {
  console.log("hello")
  res.json({"hello": true})
})

module.exports = router
