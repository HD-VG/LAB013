import express from 'express'
import medicRouter from './routers/MedicRouter.js'
const app = express()
app.use(express.json())
app.use('/routers',medicRouter)
app.listen(5000, () => {
    console.log('Server on port : ', 5000);
});
