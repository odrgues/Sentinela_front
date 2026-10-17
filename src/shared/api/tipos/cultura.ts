export type TipoCiclo = 'anual' | 'perene'

export type Cultura = {
  id: number
  nome: string
  // null no café: a lavoura perene não tem um ciclo em dias.
  cicloDias: number | null
  tipoCiclo: TipoCiclo
}
