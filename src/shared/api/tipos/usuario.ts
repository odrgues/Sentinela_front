export type Usuario = {
  id: number
  nome: string
  email: string
  whatsappNumero?: string | null
}

// O que o login e o cadastro devolvem.
export type Entrada = {
  token: string
  usuario: Usuario
}
