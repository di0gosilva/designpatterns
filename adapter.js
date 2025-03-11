class ferramentaPgtoAntiga {
    processoPagamento(quantia) {
        console.log(`vai fazer o pagamento da quantia: ${quantia}`)
    }
}

class novaVersaoAPIPagamento {
    pagar(detalhamento_pagamento) {
        console.log(`vai fazer o pagamento no novo sistema ${detalhamento_pagamento.valor}`)
    }
}

class AdapterPagamento {
    constructor(novaVersaoAPIPagamento) {
        this.novaVersaoAPIPagamento = novaVersaoAPIPagamento
    }

    processoPagamento(quantia) {
        this.novaVersaoAPIPagamento.pagar({valor: quantia})
    }
}

const pagamento = new ferramentaPgtoAntiga()
pagamento.processoPagamento("R$500,00")

const novoPagamento = new novaVersaoAPIPagamento()
const adapter = new AdapterPagamento(novoPagamento)

adapter.processoPagamento("R$500,00")