import Image from 'next/image'
import {
    Container,
    SearchSection,
    Search,
    SearchInput,
    SearchIcon,
    MiddleImages,
    InteractionButtons,
    User,
    Hearts,
    Cart,
    Money
} from './styles'

import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function Header() {
    return (
        <Container>
            <SearchSection>
                <Search>
                    <SearchInput
                        placeholder='Buscar'
                    >
                    </SearchInput>
                    <SearchIcon>
                        <AiOutlineSearch />
                    </SearchIcon>
                </Search>
            </SearchSection>

            <MiddleImages>
                <Image
                    src={"/imgs/logo-sandro.png"}
                    layout={"fixed"}
                    height={"46"}
                    width={"263"}
                />
            </MiddleImages>

            <InteractionButtons>
                <User>
                    <AiOutlineUser />
                </User>
                <Hearts>
                    <BsSuitHeart />
                </Hearts>
                <Cart>
                    <AiOutlineShoppingCart />
                    <Money>
                        R$ 0,00
                    </Money>
                </Cart>

            </InteractionButtons>

        </Container>
    )
}