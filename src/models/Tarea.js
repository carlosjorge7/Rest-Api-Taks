import { Schema, model } from 'mongoose';

const tarea = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true // Quita espacios
    },
    descripcion: {
        type: String,
        trim: true
    },
    hecha: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Tarea', tarea)