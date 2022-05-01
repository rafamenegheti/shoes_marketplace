import { 
    Container,
    Drop,
    Name,
    Icon
} from './styles'

import { AiOutlineDown } from 'react-icons/ai'

import { titles } from '../../utils/dropdownTitle'

export function Dropdown() {
    return (
        <Container>
            {
                titles.map(title => {
                    return (
                        <Drop>
                            <Name>
                                {title}
                            </Name>
                            <Icon>
                                <AiOutlineDown />
                            </Icon>
                        </Drop>
                    )
                })
            }

        </Container>
    )
}