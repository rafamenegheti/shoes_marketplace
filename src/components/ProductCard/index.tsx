import Image from 'next/image';
import {
    Container,
    MainImageWrapper,
    Image1Container,
    Image2Container,
    IconsWrapper,
    Icon,
    ProductDesc,
    Title,
    Prices,
    Price,
    PreviousPrice,
    Stars
} from './style'

import { AiOutlineHeart } from 'react-icons/ai'
import { GiBinoculars } from 'react-icons/gi'
import { ImPriceTags } from 'react-icons/im'

export function ProductCard() {


    return (
        <Container>
                <MainImageWrapper>
                    <Image1Container >
                        <Image
                            src={'/imgs/sapato1.png'}
                            alt={''}
                            layout={"fixed"}
                            width={"300"}
                            height={"300"}
                        />
                    </Image1Container>
                    <Image2Container className='imageDesp'>
                        <Image
                            src={'/imgs/sapato2.png'}
                            alt={''}
                            layout={"fixed"}
                            width={"300"}
                            height={"300"}
                        />
                    </Image2Container>
                    <IconsWrapper className='icons'>
                        <Icon>
                            <AiOutlineHeart />
                        </Icon>
                        <Icon>
                            <GiBinoculars />
                        </Icon>
                        <Icon>
                            <ImPriceTags />
                        </Icon>
                    </IconsWrapper>
                </MainImageWrapper>

            <ProductDesc className='productDesc'>
                <Title>
                    KIT SAPATO SOCIAL LOAFER SANDRO MOSCOLONI TOULOUSE + CINTO 601 PRETO
                </Title>
                <Prices>

                    <Price>
                        R$ 79,90
                    </Price>
                    <PreviousPrice>
                        R$ 189,90
                    </PreviousPrice>
                </Prices>
                <Stars className='stars'>
                    Sem comentaroios
                </Stars>
            </ProductDesc>


        </Container>
    );
}