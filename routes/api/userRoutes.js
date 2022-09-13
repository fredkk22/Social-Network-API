const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// Route is /api/users
router.route('/').get(getUsers).post(createUser);

// Route is /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// Route is /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// Route is /api/users/:userId/friends/:friendId
router.route('/:thoughtId/friends/:friendId').delete(deleteFriend);

module.exports = router;
