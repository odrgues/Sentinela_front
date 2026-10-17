import type { Cultura } from '../../shared/api/tipos/cultura'

// As culturas que já estão no banco (database/seeds/02_dados_iniciais.sql do sentinela).
export const culturas: Cultura[] = [
  { id: 1, nome: 'Feijão', cicloDias: 90, tipoCiclo: 'anual' },
  { id: 2, nome: 'Milho', cicloDias: 120, tipoCiclo: 'anual' },
  { id: 3, nome: 'Soja', cicloDias: 120, tipoCiclo: 'anual' },
]
