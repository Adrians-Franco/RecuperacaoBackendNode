class ServiceRecuperacao{

      celsiusparafahrenheit(C){
        if(isNaN(C)){
            throw new Error("digite um numero valido")
        }
        return(C * 9/5) + 32 
    }

      fahrenheitparacelsius(F){
        if(isNaN(F)){
            throw new Error("digite um numero valido")
        }
        return C = (F - 32) *5/9
    }
       celsiusparakelvin(C){
        if(isNaN(C)){
            throw new Error("digite um numero valido")
        }
        return K = C + 273.15
    }
      kelvinparacelsius(K){
        if(isNaN(K)){
            throw new Error("digite um numero valido")
        }
        return C = K - 273.15
    }
      celsiusparareaumur(C){
        if(isNaN(C)){
            throw new Error("digite um numero valido")
        }
        return R = C *4/5
    }
    celsiuspararankine(C){
        if(isNaN(C)){
            throw new Error("digite um numero valido")
        }
        return Ra = (C + 273.15) *9/5
    }
}

export default new ServiceRecuperacao()