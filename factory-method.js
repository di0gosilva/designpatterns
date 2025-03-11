class Notificacao {
    enviar(msg) {
        throw new Error("implementar o método na classe filha")
    }
}

class NotificacaoEmail extends Notificacao {
    enviar(msg) {
        console.log(`mensagem para email: ${msg}`)
    }
}

class NotificacaoSMS extends Notificacao {
    enviar(msg) {
        console.log(`mensagem para sms: ${msg}`)
    }
}

class FactoryNotificacao {
    static criarNotificacao(tipo) {
        switch(tipo) {
            case "email":
                return new NotificacaoEmail()
            case "sms":
                return new NotificacaoSMS()
            default:
                throw new Error("tipo desconhecido")    
        }
    }
}

const notificacao = FactoryNotificacao.criarNotificacao("sms")
notificacao.enviar(":)")