import express from "express"
import ControllerRecuperacao from "../controller/Recuperacao.js"

const router = express.Router()




router.post('/celsius-fahrenheit/', ControllerRecuperacao.celsiusparafahrenheit);

 router.post('/fahrenheit-celsius/', ControllerRecuperacao.fahrenheitparacelsius);

 router.post('/celsius-kelvin/', ControllerRecuperacao.celsiusparakelvin);

 router.post('/kelvin-celsius/', ControllerRecuperacao.kelvinparacelsius);

 router.post('/celsius-reaumur/', ControllerRecuperacao.celsiusparareaumur);

 router.post('/celsius-rankine/', ControllerRecuperacao.celsiuspararankine);

 router.get("/lista", ControllerRecuperacao.ListaDeOperacoes)

export default  router