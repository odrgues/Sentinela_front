import type { RouteObject } from 'react-router'
import { NaoEncontrada } from './NaoEncontrada'
import { PaginaVazia } from './PaginaVazia'

// Uma rota por tela do canvas. A tela chama de "lavoura" o que a API chama de "cultivo".
export const rotas: RouteObject[] = [
  { path: '/entrar', element: <PaginaVazia titulo="Entrar" /> },
  { path: '/cadastro', element: <PaginaVazia titulo="Criar conta" /> },
  { path: '/esqueci-senha', element: <PaginaVazia titulo="Esqueci minha senha" /> },
  { path: '/nova-senha', element: <PaginaVazia titulo="Criar nova senha" /> },
  { path: '/', element: <PaginaVazia titulo="Painel" /> },
  { path: '/lavouras/nova', element: <PaginaVazia titulo="Nova lavoura" /> },
  { path: '/lavouras/:id', element: <PaginaVazia titulo="Detalhe da lavoura" /> },
  { path: '/lavouras/:id/editar', element: <PaginaVazia titulo="Editar lavoura" /> },
  { path: '/conta', element: <PaginaVazia titulo="Minha conta" /> },
  { path: '*', element: <NaoEncontrada /> },
]
