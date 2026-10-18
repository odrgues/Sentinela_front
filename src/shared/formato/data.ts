// A data de hoje no formato da API (2026-10-18), pelo relógio do computador da pessoa.
// Sem toISOString: ele usa o fuso de Londres, e à noite no Brasil já seria amanhã.
export function hoje() {
  return noFormatoDaApi(new Date())
}

function noFormatoDaApi(data: Date) {
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const dia = String(data.getDate()).padStart(2, '0')
  return `${data.getFullYear()}-${mes}-${dia}`
}

function hora(data: Date) {
  const minutos = data.getMinutes()
  return minutos === 0
    ? `${data.getHours()}h`
    : `${data.getHours()}h${String(minutos).padStart(2, '0')}`
}

// Quando a previsão foi buscada: "hoje às 7h", "ontem, 10/10 às 7h" ou "08/10 às 7h30".
// O horário vem da API com fuso (2026-10-11T07:00:00-03:00) e aparece no horário do aparelho.
export function quandoFoi(dataEHora: string, agora = new Date()) {
  const quando = new Date(dataEHora)
  const ontem = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() - 1)
  const diaEMes = `${String(quando.getDate()).padStart(2, '0')}/${String(quando.getMonth() + 1).padStart(2, '0')}`

  if (noFormatoDaApi(quando) === noFormatoDaApi(agora)) return `hoje às ${hora(quando)}`
  if (noFormatoDaApi(quando) === noFormatoDaApi(ontem))
    return `ontem, ${diaEMes} às ${hora(quando)}`
  return `${diaEMes} às ${hora(quando)}`
}
