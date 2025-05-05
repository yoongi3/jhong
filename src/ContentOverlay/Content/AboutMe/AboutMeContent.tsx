import { Text } from "./AboutMeStyle";
import faceImg from "/src/Assets/face-sprite.jpg";

const AboutMeContent = () => {
    return(
        <Text>
            <img src={faceImg} alt="face"/>
            <p>
                <span>Hi, I'm Josh.</span>
            </p>
            <p>
                <span>
                I'm a software engineer who enjoys solving problems and making
                everyday tasks simpler. If something feels repetitive, I’ll try to
                automate it. I like building tools that save time and just make things
                work better.
                </span>
            </p>
            <p>
                <span>
                I first got into programming through game development, but over time,
                I realized that what I really enjoy is creating practical, real-world
                solutions. Whether it’s refining an existing system or building
                something from scratch, I love the challenge of turning ideas into
                clean, functional code.
                </span>
            </p>
            <p>
                <span>
                Outside of coding, I’m always exploring new technologies, working on
                side projects, or finding ways to improve the tools I already use. I
                enjoy the blend of logic and creativity that software development
                offers, and I'm always looking for ways to grow and improve.
                </span>
            </p>
            <p>
                <span>
                Thanks for stopping by — feel free to check out my work or reach out
                if you'd like to connect!
                </span>
            </p>
         </Text>
    )
};

export default AboutMeContent;