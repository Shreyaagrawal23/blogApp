const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth');
const upload = require('../middlewares/upload');

router.post('/', authMiddleware, upload.single('poster'), postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);
router.put('/:id', authMiddleware, upload.single('poster'), postController.updatePost);
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;