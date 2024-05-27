
    // criando objeto
    class Contador {
        constructor(valorInicial) {
            this.valor = valorInicial;
        }

        incrementar() {
            this.valor++;
            console.log("Valor atual: " + this.valor);
        }

        zerar() {
            this.valor = 0;
            console.log("Contador zerado!");
        }
    }

    // colocando o valor inicial em 1
    const meuContador = new Contador(1);

    // mostra as opções do usuário dentro do simulador
    while (true) {
        const escolha = prompt(
            "Escolha uma ação:\n1 - Incrementar\n2 - Zerar\n3 - Sair"
        );

        switch (escolha) {
            case "1":
                meuContador.incrementar();
                break;
            case "2":
                meuContador.zerar();
                break;
            case "3":
                console.log("Encerrando...");
                break;
            default:
                console.log("Opção inválida!");
        }

        if (escolha === "3") {
            break; 
            // sai do loop se o usuário escolher "Sair"
        }
    }