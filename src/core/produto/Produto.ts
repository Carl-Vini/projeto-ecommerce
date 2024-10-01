import Especificacoes from "./Especificacoes"

export default interface Produto {
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    nota: number
    videwReview: string
    tags: string[]
    especificacoes: Especificacoes
}