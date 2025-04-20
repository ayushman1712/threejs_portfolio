import React, { useMemo } from 'react';
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("ayushman22129@iiitd.ac.in");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    // Determine if it's day or night
    const isNight = useMemo(() => {
        const hour = new Date().getHours();
        return hour < 6 || hour >= 18;
    }, []);

    const globeImageUrl = isNight
        ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
        : "//unpkg.com/three-globe/example/img/earth-day.jpg";

    return (
        <section className="container mx-auto px-4 c-space my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3 grid-container">
                    <img
                        src="/assets/grid1.png"
                        alt="grid-1"
                        className="w-full max-w-sm object-contain mx-auto"
                    />
                    <div>
                        <p className="grid-headtext">Hi, I'm Ayushman</p>
                        <p className="grid-subtext break-words">
                            Upcoming SWE Intern @Salesforce | Undergraduate Researcher @Creative Interfaces Lab |
                            Ex-Trainee @DRDO | Winner, Adobe Designathon 2024 | CS and Design @IIIT Delhi
                        </p>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3 grid-container">
                    <img
                        src="/assets/grid-2.png"
                        alt="grid-2"
                        className="w-full max-w-sm object-contain mx-auto"
                    />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext break-words">
                            Figma, Adobe Creative Suite, MySQL, C++, Git, HTML, CSS, JavaScript
                        </p>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4 grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center mb-4">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere={true}
                            showGraticules={true}
                            globeImageUrl={globeImageUrl}
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 28.7041, lng: 77.1025,
                                text: "I'm here!",
                                color: "white",
                                size: 500,
                            }]}
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">Where I'm from</p>
                        <p className="grid-subtext">I'm based in Delhi, India with remote work available.</p>
                        <Button
                            name="Let's work together"
                            isBeam
                            containerClass="w-full mt-10"
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div className="col-span-1 sm:col-span-2 xl:row-span-3 grid-container">
                    <img
                        src="/assets/grid3.png"
                        alt="grid-3"
                        className="w-full max-w-sm object-contain mx-auto"
                    />
                    <div>
                        <p className="grid-headtext">What I do</p>
                        <p className="grid-subtext break-words">
                            I'm a undergraduate researcher at the Creative Interfaces Lab at IIIT Delhi. My work usually
                            deals in exploring the intersection of Human Centered Design and technology.
                        </p>
                        <p className="grid-subtext break-words">
                            I'm also a freelance designer, and I love to create things that make people's lives easier.
                        </p>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2 grid-container">
                    <img
                        src="/assets/grid4.png"
                        alt="grid-4"
                        className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top mx-auto"
                    />
                    <div className="space-y-2 text-center mt-4">
                        <p className="grid-subtext">Contact me</p>
                        <div
                            className="copy-container flex items-center justify-center gap-2 cursor-pointer"
                            onClick={handleCopy}
                        >
                            <img
                                src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                                alt="copy"
                                className="w-5 h-5"
                            />
                            <p className="lg:text-2xl md:text-xl font-medium text-fray_gradient text-white">
                                ayushman22129@iiitd.ac.in
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
