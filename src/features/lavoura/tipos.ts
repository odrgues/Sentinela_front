export type Ponto = { latitude: number; longitude: number }

// O ponto marcado no mapa, com a cidade e a UF que o Google achou para ele.
export type Local = Ponto & { cidade: string; uf: string }

// O que a pessoa preenche em "O que você plantou?". Tudo texto, como vem dos campos.
export type DadosDaLavoura = {
  culturaId: number | null
  apelido: string
  dataPlantio: string
  area: string
}

export type Cultivo = {
  id: number
  apelido: string
  cultura: string
  dataPlantio: string
  colheitaPrevista: string
  areaHa: number | null
  latitude: number
  longitude: number
  municipio: string
  status: 'em_andamento' | 'colhido' | 'perdido'
}
