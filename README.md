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
- A API de mentira com MSW, que por enquanto responde só o `GET /api/culturas`.
- As rotas das telas do canvas, cada uma ainda com a página vazia.
