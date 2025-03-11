class Hamburger {
    constructor(pao, carne, queijo, molho) {
        this.pao = pao
        this.carne = carne
        this.queijo = queijo
        this.molho = molho
    }
    getBurger() {
        console.log(`Hamburger feito com pão ${this.pao}, carne ${this.carne}, queijo ${this.queijo} e molho ${this.molho}.`)
    }
}

// const burger = new Hamburger("brioche", "180g", "cheddar", "barbecue")
// burger.getBurger()

class HamburgerBuilder {
    constructor() {
        this.pao = "trigo"
        this.carne = "patinho"
        this.queijo = "mussarela"
        this.molho = "maionese caseira"
        this.salada = "não"
    }
    setPao(pao) {
        this.pao = pao
        return this
    }
    setCarne(carne) {
        this.carne = carne
        return this
    }
    setQueijo(queijo) {
        this.queijo = queijo
        return this
    }
    setMolho(molho) {
        this.molho = molho
        return this
    }
    addSalada() {
        this.salada = "sim"
        return this
    }
    builder() {
        return new Hamburger(this.pao, this.carne, this.queijo, this.molho, this.salada)
    }
    getBurger() {
        console.log(`Hamburger feito com pão ${this.pao}, carne ${this.carne}, queijo ${this.queijo} e molho ${this.molho}. Contém salada: ${this.salada}.`)
    }
}

const burger1 = new HamburgerBuilder()
burger1.getBurger()

burger1.setPao("brioche").setCarne("180g").setQueijo("Cheddar").setMolho("Rosé").addSalada()
burger1.getBurger()