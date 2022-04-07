import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{

    obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
            })

        })
    }

}