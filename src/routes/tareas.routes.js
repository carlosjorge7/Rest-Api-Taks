import { Router } from 'express';
import * as tareasController from '../controllers/tareas.controller';
const router = Router();

router.get('/', tareasController.getAllTareas);
router.post('/', tareasController.createTarea);
router.get('/hecha', tareasController.getAllTareasHechas); // La pongo antes para que no de conflicto con la del id
router.get('/:id', tareasController.getTarea);
router.delete('/:id', tareasController.deleteTarea);
router.put('/:id', tareasController.updateTarea);

module.exports = router;