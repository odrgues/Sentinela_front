import type { RouteObject } from 'react-router'
import { Cadastro } from '../../features/acesso/Cadastro'
import { Entrar } from '../../features/acesso/Entrar'
import { EsqueciSenha } from '../../features/acesso/EsqueciSenha'
import { NovaSenha } from '../../features/acesso/NovaSenha'
import { NovaLavoura } from '../../features/lavoura/NovaLavoura'
import { Casca } from '../../shared/layout/Casca'
import { SoQuemEntrou, SoQuemNaoEntrou } from './guardas'
import { NaoEncontrada } from './NaoEncontrada'
import { PaginaVazia } from './PaginaVazia'

// Uma rota por tela do canvas. A tela chama de "lavoura" o que a API chama de "cultivo".
export const rotas: RouteObject[] = [
  {
    element: <SoQuemNaoEntrou />,
    children: [
      { path: '/entrar', element: <Entrar /> },
      { path: '/cadastro', element: <Cadastro /> },
      { path: '/esqueci-senha', element: <EsqueciSenha /> },
    ],
  },
  // O link do e-mail abre mesmo com alguém logado: "Trocar minha senha" passa por aqui.
  { path: '/nova-senha', element: <NovaSenha /> },
  {
    element: <SoQuemEntrou />,
    children: [
      {
        element: <Casca />,
        children: [
          { path: '/', element: <PaginaVazia titulo="Painel" /> },
          { path: '/lavouras/nova', element: <NovaLavoura /> },
          { path: '/lavouras/:id', element: <PaginaVazia titulo="Detalhe da lavoura" /> },
          { path: '/lavouras/:id/editar', element: <PaginaVazia titulo="Editar lavoura" /> },
          { path: '/conta', element: <PaginaVazia titulo="Minha conta" /> },
        ],
      },
    ],
  },
  { path: '*', element: <NaoEncontrada /> },
]
