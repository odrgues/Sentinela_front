import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { chamarApi } from '../../shared/api/cliente'
import type { ErroApi } from '../../shared/api/erros'
import type { Cultivo, Local } from './tipos'

export type NovoCultivo = Local & {
  culturaId: number
  apelido: string
  dataPlantio: string
  areaHa?: number
}

// Salva e volta para o painel, que mostra "Lavoura salva!" e já pede os avisos de novo.
export function useCriarLavoura() {
  const navegar = useNavigate()
  const clienteDeConsultas = useQueryClient()

  return useMutation<Cultivo, ErroApi, NovoCultivo>({
    mutationFn: (dados) => chamarApi<Cultivo>('cultivos', { metodo: 'POST', corpo: dados }),
    onSuccess: () => {
      clienteDeConsultas.invalidateQueries({ queryKey: ['painel'] })
      navegar('/', { state: { mensagem: 'Lavoura salva!' } })
    },
  })
}
