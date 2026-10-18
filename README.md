# Sentinela front

O site do Sentinela: a previsão do tempo traduzida para a lavoura de quem planta. O produtor
cadastra as lavouras e vê, no mapa e em cada lavoura, os avisos de calor, frio e chuva da
semana. O front só mostra: a tradução do clima em aviso chega pronta do backend.

Vite, React, TypeScript, styled-components e Vitest com Testing Library, com TanStack Query
para os dados, MSW para a API de mentira e React Router para as rotas. As telas seguem o
canvas "Sentinela — Telas", de 11/10.

## Como rodar

Precisa do Node 22.22 ou mais novo.

```sh
npm install
npm run dev       # abre o app, com a API de mentira ligada
npm test          # roda os testes
npm run build     # verifica os tipos e gera o build
npm run lint      # regras de código
npm run format    # arruma a formatação com o Prettier
```

Em `npm run dev`, o que a API de mentira não responde vai para o backend de verdade, em
`http://localhost:8080` (o proxy fica no `vite.config.ts`).

No build de produção, a API fica em outro endereço, que vem da variável `VITE_API_URL`
(ver `.env.example`):

```sh
VITE_API_URL=https://endereco-da-api npm run build
```

## Pastas

```
src/
  main.tsx       ponto de entrada: liga o MSW em dev e monta o App
  app/           rotas, provedores e App.tsx
  styles/        o único lugar com valor visual: cores, espaços, fontes, raios e ícones
  shared/
    api/         o cliente da API, os erros, o token e os hooks que mais de uma tela usa
  features/
    <tela>/      a página, os componentes e os testes daquela tela
  mocks/         respostas de mentira no formato exato da API
  test/          o setup dos testes e o abrirApp
```

- `features` usa `shared` e `styles`. `shared` nunca usa `features`, e uma tela não importa
  nada de outra.
- Uma peça só vai para `shared` quando a segunda tela precisa dela.
- Nenhum valor visual fora de `src/styles`: o `guarda.test.ts` falha se alguém digitar uma
  cor ou um tamanho.
- Só `src/shared/api` chama a API.

## Como um dado chega na tela

```
tela → hook (useQuery ou useMutation) → chamarApi → API
                                                     ↓
tela ← dado ou ErroApi ←─────────────────────────────┘
```

A `chamarApi` (`src/shared/api/cliente.ts`) põe o token JWT no cabeçalho `Authorization`,
manda o corpo em JSON e devolve o corpo da resposta. Quando dá errado, devolve um `ErroApi`
com a mensagem pronta para a pessoa, o `status` e os erros de cada campo. O backend responde
os erros no formato combinado no canvas:

```json
{ "mensagem": "Confira os campos", "campos": { "email": "E-mail inválido" } }
```

Nos 4xx, a tela mostra a `mensagem` do backend. Nos 5xx e sem internet, uma mensagem padrão.
Uma consulta vale por 5 minutos, não repete num 4xx e tenta mais duas vezes nos outros erros.

## Status

**A fundação:**

- O projeto com a mesma stack e as mesmas regras do Orizzonte front.
- O tema claro, com as cores e as medidas do canvas, e a fonte Figtree.
- A `chamarApi`, os erros e o token JWT guardado no navegador.
- A API de mentira com MSW.
- As rotas das telas do canvas.

**O acesso** (`src/features/acesso`):

- **Entrar**, **Criar conta**, **Esqueci minha senha** (com o "Confira seu e-mail") e **Criar
  nova senha** (com o "Este link expirou"), no celular e no computador.
- Login e cadastro guardam o token JWT. Do cadastro, a pessoa já vai marcar a primeira lavoura.
- **Rotas protegidas:** sem token, as telas da lavoura e da conta mandam para o login. Com
  token, o login, o cadastro e o esqueci a senha mandam para o painel. A nova senha abre dos
  dois jeitos, porque o "Trocar minha senha" da conta usa o mesmo link.
- Erro de campo embaixo do campo, e erro geral numa caixa em cima do botão.
- As peças dos formulários em `src/shared/ui`: `Campo`, `Botao`, `AvisoDeErro`, `Mensagem`
  (some sozinha em 4 segundos) e `Marca`.

Na API de mentira, entra a conta `joao@exemplo.com` com a senha `123456`. O cadastro com esse
e-mail dá "e-mail já cadastrado", e o link `/nova-senha?token=expirado` faz o papel do link
vencido.

**A casca e a Nova lavoura** (`src/shared/layout` e `src/features/lavoura`):

- **A casca** das telas de quem entrou: no computador, a barra do topo com Painel, Nova lavoura
  e Minha conta (com a inicial do nome). No celular, cada tela tem o próprio topo.
- **Sessão vencida:** um 401 com token apaga o token e volta para o login com o aviso.
- **Nova lavoura:** no celular em dois passos, "Onde fica sua lavoura?" (o mapa) e "O que você
  plantou?" (o formulário); no computador, os dois lado a lado. O marcador fica parado no
  meio e a pessoa arrasta o mapa; a busca usa o Places, o município e a UF vêm do Geocoder, e
  "Usar minha localização" usa o GPS do navegador.
- A lista de culturas com busca (sem ligar para acento), a pergunta do café ("Desde quando a
  lavoura existe?") e o nome repetido (409) avisado embaixo do campo.

**Sem a chave do Google** (`VITE_GOOGLE_MAPS_KEY`, ver `.env.example`), a tela mostra "Mapa
desligado" e, em desenvolvimento e nos testes, marca a lavoura no ponto de exemplo, em Uberaba –
MG. A parte do Google (mapa, busca e Geocoder) só roda com a chave, e ainda não foi testada com
uma chave de verdade.

As outras telas ainda estão com a página vazia.
