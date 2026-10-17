// As cores do canvas "Sentinela — Telas" (11/10). Só existe o tema claro.
export const cores = {
  destaque: {
    base: '#2F5D3A',
    hover: '#1F4128',
    suave: '#E1EEDC',
    sobreSuave: '#24492D',
  },
  fundo: {
    pagina: '#F5F3EC',
    cartao: '#FFFFFF',
    campo: '#FFFFFF',
    mapa: '#E6E9D8',
    carregando: '#E2E0D6',
    carregandoSuave: '#ECEAE1',
    trilho: '#E4E7DC',
    semPrevisao: '#E6E7E2',
    mensagem: '#1C2A1F',
  },
  texto: {
    principal: '#1C2A1F',
    secundario: '#555F54',
    placeholder: '#7A8478',
    semPrevisao: '#2E3530',
    sobreDestaque: '#FFFFFF',
    sobreMarca: '#E4EEE1',
    icone: '#5F6B66',
  },
  borda: {
    cartao: '#DAD8CC',
    campo: '#C3CBBE',
  },
  // Cada nível de aviso tem a cor do marcador no mapa e o fundo e o texto do selo.
  nivel: {
    critico: { marcador: '#B42318', fundo: '#FBE3DF', texto: '#8E1F12', corpo: '#5E160D' },
    atencao: { marcador: '#C27A0E', fundo: '#FCEFD3', texto: '#6E4300', corpo: '#4F3000' },
    ok: { marcador: '#2F5D3A', fundo: '#E1EEDC', texto: '#24492D', corpo: '#24492D' },
  },
  enso: {
    fundo: '#E3EDF3',
    titulo: '#173F56',
    texto: '#1F3B4C',
  },
  marca: {
    sol: '#F2D27A',
  },
  sucesso: '#9CC3A3',
  foco: '#9CC3A3',
}

export type Cores = typeof cores
