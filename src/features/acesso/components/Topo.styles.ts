import { Link } from 'react-router'
import styled, { css } from 'styled-components'

export const Topo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.altura.toque};
  margin: ${({ theme }) => theme.espaco[6]} 0 ${({ theme }) => theme.espaco[4]};
`

const estiloDoVoltar = css`
  width: ${({ theme }) => theme.altura.toque};
  height: ${({ theme }) => theme.altura.toque};
  margin-left: -${({ theme }) => theme.espaco[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.raio.campo};
  background: none;
  color: ${({ theme }) => theme.cores.texto.principal};
  cursor: pointer;
`

export const VoltarLink = styled(Link)`
  ${estiloDoVoltar}
`

export const VoltarBotao = styled.button`
  ${estiloDoVoltar}
`

// Do mesmo tamanho do botão de voltar, para a marca ficar no meio.
export const Vazio = styled.span`
  width: ${({ theme }) => theme.altura.toque};
`
