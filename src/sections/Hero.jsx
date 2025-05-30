import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     }, rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     }, rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     }, rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     }, scale: {
    //         value: 0.07,
    //         min: 0.01,
    //         max: 0.1,
    //         step: 0.01,
    //     }
    // })
    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({maxWidth:768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className={"min-h-screen w-full flex flex-col relative"}>
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"}>
                <p className={"sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"}>
                    Hi, I am Ayushman <span className={"waving-hand"}>👋</span>
                </p>

                <p className={"hero_tag text-gray_gradient"}>Comp Science + Des @IIITD</p>
            </div>

            <div className={"w-full h-full absolute inset-0"}>
                {/*<Leva />*/}
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                // scale={0.07}
                                // position={[0,0,0]}
                                // rotation={[0, 280, 0]}
                                position={sizes.deskPosition}
                                rotation={[0.0, -Math.PI, 0.0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href={"#contact"} className={"w-fit"}>
                    <Button name={"Let's work together"} isBeam containerClass={"sm-w-fit w-full sm:min-w-96"}>Contact Me</Button>
                </a>
            </div>
        </section>
    )
}
export default Hero
