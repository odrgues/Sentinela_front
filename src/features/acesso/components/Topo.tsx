import { ChevronLeft } from 'lucide-react'
import { useTheme } from 'styled-components'
import { Marca } from '../../../shared/ui/Marca'
import * as S from './Topo.styles'

type Voltar = { rotulo: string } & ({ para: string } | { aoClicar: () => void })

// A linha do alto das telas sem faixa verde: a seta de voltar e, se pedir, a marca no meio.
export function Topo({ voltar, comMarca = false }: { voltar?: Voltar; comMarca?: boolean }) {
  const tema = useTheme()
  const seta = <ChevronLeft size={tema.icone.topo} aria-hidden />

  return (
    <S.Topo>
      {voltar &&
        ('para' in voltar ? (
          <S.VoltarLink to={voltar.para} aria-label={voltar.rotulo}>
            {seta}
          </S.VoltarLink>
        ) : (
          <S.VoltarBotao type="button" onClick={voltar.aoClicar} aria-label={voltar.rotulo}>
            {seta}
          </S.VoltarBotao>
        ))}
      {comMarca && <Marca />}
      {voltar && comMarca && <S.Vazio />}
    </S.Topo>
  )
}
