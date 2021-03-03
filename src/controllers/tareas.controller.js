import Tarea from '../models/Tarea';

export const getAllTareas =  async (req, res) => {
    try{
        const { titulo } = req.query;

        

        const tareas = await Tarea.find();
        res.json(tareas);
    }
    catch(error) {
        res.status(500).json({
            message: error.message || 'Error listar todas las tareas'
        });
    }
};

export const createTarea = async (req, res) => {
    try {
        const nuevaTarea = new Tarea({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            hecha: req.body.hecha ? req.body.hecha: false
        });
        const tareaGuardada = await nuevaTarea.save();
        res.json(tareaGuardada);
    }
    catch(error) {
        res.status(500).json({
            message: error.message || 'Error para crear una tarea'
        });
    }
};

export const getTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.findById(id);
        if(!tarea){
            return res.status(404).json({ message: `Tarea con el id ${id} no existe`})
        }
        res.json(tarea);
    }
    catch(error) {
        res.status(500).json({ message: 'Error al obtener la tarea'});
    }
};

export const deleteTarea = async (req, res) => {
    const { id } = req.params;
    try {
        await Tarea.findByIdAndDelete(id);
        res.json({
        message: 'Tarea borrada correctamente'
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Error al borrar la tarea'});
    }
};

export const getAllTareasHechas = async (req, res) => {
    try {
        const tareas = await Tarea.find({hecha: true});
        res.json(tareas);
    }
    catch(error) {
        res.status(500).json({ message: 'Error al listar tareas hechas'});
    }
};

export const updateTarea = async (req, res) => {
    const { id } = req.params;
    try {
        await Tarea.findByIdAndUpdate(id, req.body);
        res.json({
            message: 'Tarea actualizada'
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Error al actualizatr tarea'});
    }
};

