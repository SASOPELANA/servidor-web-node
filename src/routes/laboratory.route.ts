import express from 'express';
import controller from '../controllers/laboratory.controller.js';

const router = express.Router();

// esta ruta va primero
router.get('/create', controller.create);
router.post('/', controller.locationPost);

router.get('/', controller.location);
router.get('/:id', controller.locationById);

router.get('/:id/edit', controller.edit);
router.put('/:id', controller.updateLocation);

router.delete('/:id', controller.locationDelete);

export default router;
