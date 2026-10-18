import { http, HttpResponse } from 'msw'
import { culturas } from './dados/culturas'
import { usuario } from './dados/usuario'

type NovoCultivo = {
  culturaId: number
  apelido: string
  dataPlantio: string
  areaHa?: number
  latitude: number
  longitude: number
  cidade: string
  uf: string
}

// A conta de teste já tem uma lavoura com este nome: salvar outra igual dá 409.
export const APELIDO_REPETIDO = 'Talhão do fundo'

export const handlersDaLavoura = [
  http.get('/api/usuario/me', () => HttpResponse.json(usuario)),

  http.post('/api/cultivos', async ({ request }) => {
    const novo = (await request.json()) as NovoCultivo
    if (novo.apelido === APELIDO_REPETIDO) {
      return HttpResponse.json(
        { status: 409, mensagem: 'Você já tem uma lavoura com esse nome.' },
        { status: 409 },
      )
    }
    const cultura = culturas.find(({ id }) => id === novo.culturaId)
    return HttpResponse.json(
      {
        id: 10,
        apelido: novo.apelido,
        cultura: cultura?.nome ?? '',
        dataPlantio: novo.dataPlantio,
        colheitaPrevista: novo.dataPlantio,
        areaHa: novo.areaHa ?? null,
        latitude: novo.latitude,
        longitude: novo.longitude,
        municipio: `${novo.cidade} – ${novo.uf}`,
        status: 'em_andamento',
      },
      { status: 201 },
    )
  }),
]
