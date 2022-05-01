import Image from "next/image";
import { 
    Container,
    Imagem
} from './styles'

export function BigBanner() {

    return (
        <Container>
            {/* <Image
                src={"https://cdn.shopify.com/s/files/1/0327/2314/0747/files/miroir-sm-br_x360.jpg?v=1651077951%20180h%20550w,//cdn.shopify.com/s/files/1/0327/2314/0747/files/miroir-sm-br_x400.jpg?v=1651077951%20360h%201100w,//cdn.shopify.com/s/files/1/0327/2314/0747/files/miroir-sm-br_x580.jpg?v=1651077951%20540h%201649w,//cdn.shopify.com/s/files/1/0327/2314/0747/files/miroir-sm-br.jpg?v=1651077951%20550h%201680w"}
                objectFit={'contain'}
            /> */}
            <Imagem 
                alt={""}
                src="/imgs/banner.jpg"
            />
        </Container>
    )
};