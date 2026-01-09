import express from 'express';
import controller from '../controllers/routes.controller.js';

const router = express.Router();

router.get('/', controller.getCharacters);
router.get('/:id', controller.getByIdCharacter);

export default router;
