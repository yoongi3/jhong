import { Text } from "./AboutMeStyle";
import faceImg from "/src/Assets/profile-image.png";

const AboutMeContent = () => {
    return(
        <Text>
            <img src={faceImg} alt="face" style={{ WebkitMaskImage: "radial-gradient(circle, black 70%, transparent 100%)", maskImage: "radial-gradient(circle, black 70%, transparent 100%)" }} />
            <p>
                <span>Hi, I'm Josh.</span>
            </p>
            <p>
                <span>
                I like solving problems, especially the repetitive or messy
                kind. I'll spend three hours building something to automate a
                ten-minute task, I just can't help it once I've noticed 
                something's clunky or could be cleaner.
                </span>
            </p>
            <p>
                <span>
                Over time, I've realized that what I really enjoy is creating
                practical, real-world solutions. Whether it's refining an existing
                system or building something from scratch, I love the challenge of
                turning ideas into something clean and functional.
                </span>
            </p>
            <p>
                <span>
                Outside of that, I'm always exploring new technologies, working on
                side projects, or finding ways to improve the tools I already use. Most
                of my work has been in Python and React. I've 
                completed my CompTIA Network+ certification, which gave me a much
                stronger grasp of how networks and infrastructure actually work. I
                enjoy the blend of logic and creativity involved, and I'm always
                looking for ways to grow and improve.
                </span>
            </p>
            <p>
                <span>
                Thanks for stopping by, feel free to check out my work or reach out
                if you'd like to connect!
                </span>
            </p>
         </Text>
    )
};

export default AboutMeContent;
