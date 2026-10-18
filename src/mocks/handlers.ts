import { handlersDeAcesso } from './acesso'
import { culturas } from './dados/culturas'
import { sucesso } from './respostas'

export const handlers = [...handlersDeAcesso, sucesso('get', 'culturas', culturas)]
