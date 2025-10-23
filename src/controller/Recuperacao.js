import ServiceRecuperacao from '../service/Recuperacao.js'

class ControllerRecuperacao {

      celsiusparafahrenheit(req,res){
        try {
            const c = req.body.c
            const f = ServiceRecuperacao.celsiusparafahrenheit(c)
            res.status(200).send(`os celsius convertidos em fahrenheit é de: ${f}F`)

        } catch (error) {
            res.status(400).send({ msg: error.message})
        }
    }

       fahrenheitparacelsius(req,res){
        try {
            const f = req.body.f
            const c = ServiceRecuperacao.fahrenheitparacelsius(f)
            res.status(200).send(`os fahrenreit convertidos em celsius é de: ${c}C`)
        } catch (error) {
            res.status(400).send({ msg: error.message})
        }
    }

       celsiusparakelvin(req,res){
        try {
            const c = req.body.c
            const k = ServiceRecuperacao.celsiusparakelvin(c)
            res.status(200).send(`os celsius convertidos em kelvin é de: ${k}K`)
        } catch (error) {
            res.status(400).send({ msg: error.message})
        }
    }

       kelvinparacelsius(req,res){
        try {
            const k = req.body.c
            const c = ServiceRecuperacao.kelvinparacelsius(k)
            res.status(200).send(`os Kelvin convertidos em Celsius é de: ${c}C`)
        } catch (error) {
            res.status(400).send({ msg: error.message})
        }
    }

        celsiusparareaumur(req,res){
        try {
            const c = req.body.c
            const r = ServiceRecuperacao.celsiusparareaumur(c)
            res.status(200).send(`os Celsius convertidos em Reaumur é de: ${r}R`)
        } catch (error) {
            res.status(400).send({ msg: error.message})
        }
    }

         celsiuspararankine(req,res){
        try {
           const c = req.body.c
            const ra = ServiceRecuperacao.celsiusparareaumur(c)
            res.status(200).send(`os Celsius convertidos em Rankine é de: ${ra}RA`)
        } catch (error) {
            res.status(400).send({ msg: error.message})
        }
    }

    ListaDeOperacoes = (_, res) => {
     res.status(200).send("")
     }
}

export default new ControllerRecuperacao()