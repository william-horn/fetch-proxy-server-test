const axios = require('axios');
const router = require('express').Router();

const GET_root = (req, res) => {
  res.status(200).json({
    names: [
      'Jack',
      'Jill',
      'Bob',
      'Will',
      'Josh',
      'James',
      'Chris',
      'Trey'
    ]
  });
}

const POST_root = (req, res) => {}
const PUT_root = (req, res) => {}
const DELETE_root = (req, res) => {}

router
  .route('/')
  .get(GET_root)
  .post(POST_root)
  .put(PUT_root)
  .delete(DELETE_root)


module.exports = router;