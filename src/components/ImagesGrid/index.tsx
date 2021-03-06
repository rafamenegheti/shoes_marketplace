


import { useEffect, useState } from 'react';
import {
    Container,
    Image,
    Image2,
    DoubleImage
} from './styles'


interface WindowSize {
    width: number | undefined;
    widthS: number | undefined;
}


export function ImagesGrid() {


    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        widthS: undefined,
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth * 0.27,
            widthS: window.innerWidth * 0.13,
        });

        function handleResize() {
            setWindowSize({
                width: window.innerWidth * 0.27,
                widthS: window.innerWidth * 0.13,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    console.log(windowSize)

    if (windowSize.width) {
        return (

            <Container altura={windowSize.width}>
                {(windowSize.width && windowSize.widthS) &&
                    <>
                        <Image alt={""} src="/imgs/grid/grid1.jpg" altura={windowSize.width} />
                        <Image alt={""} src="/imgs/grid/grid2.jpg" altura={windowSize.width} />
                        <DoubleImage>
                            <Image2 alt={""} src="/imgs/grid/grid3.jpg" altura={windowSize.widthS} />
                            <Image2 alt={""} src="/imgs/grid/grid4.jpg" altura={windowSize.widthS} />
                        </DoubleImage>
                    </>
                }
            </Container>
        )
    }

    return <div>Carregando grid...</div>

}