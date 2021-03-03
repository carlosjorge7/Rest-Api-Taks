import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; // Para comunicacion entre servers

import tareasRoutes from './routes/tareas.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// middlewares (funciones que se ejecutan antes de las peticiones)
const corsOptions = {}; 
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // Para entender formularios

// Routes
app.get('/', (req, res) => {
    res.json({message: 'Bienvenido a mi api'});
});

app.use('/api/tareas', tareasRoutes);

module.exports = app;