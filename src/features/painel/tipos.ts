import type { TipoCiclo } from '../../shared/api/tipos/cultura'

// A cor do marcador e do selo. "info" é a semana sem risco: "Tudo certo".
export type Severidade = 'critico' | 'atencao' | 'info'

export type Condicao = 'sol' | 'sol_nuvens' | 'nublado' | 'chuva' | 'tempestade'

export type Aviso = {
  tipo: string
  severidade: Severidade
  mensagem: string
}

export type LavouraNoPainel = {
  id: number
  apelido: string
  cultura: string
  tipoCiclo?: TipoCiclo
  // null nas perenes, que mostram a safra no lugar do dia.
  diaAtual: number | null
  cicloDias: number | null
  safra?: string | null
  latitude: number
  longitude: number
  aviso: Aviso
}

export type Painel = {
  usuario: { nome: string }
  hoje: {
    cidade: string
    uf: string
    tempC: number
    condicao: Condicao
    condicaoTexto: string
  }
  frase: string
  previsaoDisponivel: boolean
  previsaoAtualizadaEm: string
  cultivos: LavouraNoPainel[]
}
