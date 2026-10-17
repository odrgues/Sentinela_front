import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { abrirApp } from '../../test/abrirApp'

const TELAS = [
  ['/entrar', 'Entrar'],
  ['/cadastro', 'Criar conta'],
  ['/esqueci-senha', 'Esqueci minha senha'],
  ['/nova-senha', 'Criar nova senha'],
  ['/', 'Painel'],
  ['/lavouras/nova', 'Nova lavoura'],
  ['/lavouras/7', 'Detalhe da lavoura'],
  ['/lavouras/7/editar', 'Editar lavoura'],
  ['/conta', 'Minha conta'],
]

describe('rotas', () => {
  it.each(TELAS)('%s abre a tela %s', async (caminho, titulo) => {
    abrirApp(caminho)

    expect(await screen.findByRole('heading', { level: 1, name: titulo })).toBeInTheDocument()
  })

  it('um endereço que não existe mostra a página não encontrada, com volta para o painel', async () => {
    const roteador = abrirApp('/nao-existe')

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Página não encontrada' }),
    ).toBeInTheDocument()

    await userEvent.click(screen.getByRole('link', { name: 'Voltar para o painel' }))
    expect(roteador.state.location.pathname).toBe('/')
  })
})
