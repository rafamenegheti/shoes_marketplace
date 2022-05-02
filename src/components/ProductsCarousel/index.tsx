import { ProductCard } from '../ProductCard'
import {
    Container,
    Title,
    CarouselWrapper
} from './styles'
export function ProductsCarousel() {

    return (
        <Container>
            <Title>
                Kits Especiais
            </Title>
            <CarouselWrapper>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </CarouselWrapper>
        </Container>
    )
}