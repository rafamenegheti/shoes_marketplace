import {
    Container,
    Card,
    Icon,
    Aside,
    Title,
    Desc,
} from './style'

import { GoRocket } from 'react-icons/go'
import { BiRotateLeft } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaLifeRing } from 'react-icons/fa'

export function Advantages() {

    return (
        <Container>

            <Card>
                <Icon>
                    <GoRocket />
                </Icon>
                <Aside>
                    <Title>
                        Frete Grátis
                    </Title>
                    <Desc>
                        acima de R$299
                    </Desc>
                </Aside>
            </Card>

            <Card>
                <Icon>
                    <BiRotateLeft />
                </Icon>
                <Aside>
                    <Title>
                        1º troca grátis
                    </Title>
                    <Desc>
                        em até 7 dias
                    </Desc>
                </Aside>
            </Card>

            <Card>
                <Icon>
                    <AiOutlineInfoCircle />
                </Icon>
                <Aside>
                    <Title>

                        6 X sem juros
                    </Title>
                    <Desc>
                        no cartão
                    </Desc>
                </Aside>
            </Card>

            <Card>
                <Icon>
                    <FaLifeRing />
                </Icon>
                <Aside>
                    <Title>

                        Envio
                    </Title>
                    <Desc>
                        Ultra Rápido
                    </Desc>
                </Aside>
            </Card>

        </Container>
    )
}