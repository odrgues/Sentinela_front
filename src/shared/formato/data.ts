// A data de hoje no formato da API (2026-10-18), pelo relógio do computador da pessoa.
// Sem toISOString: ele usa o fuso de Londres, e à noite no Brasil já seria amanhã.
export function hoje() {
  const agora = new Date()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${agora.getFullYear()}-${mes}-${dia}`
}
