import { cores } from './cores'
import {
  altura,
  espaco,
  espessura,
  fonte,
  icone,
  largura,
  quebra,
  raio,
  sombra,
  tracoDoIcone,
} from './medidas'

export const tema = {
  cores,
  espaco,
  espessura,
  fonte,
  raio,
  sombra,
  altura,
  largura,
  quebra,
  icone,
  tracoDoIcone,
}

export type Tema = typeof tema
