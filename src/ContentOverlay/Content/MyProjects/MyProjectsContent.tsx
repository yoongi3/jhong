import { useState } from 'react';
import Cartridge from './Cartridge'; // Your reusable component
import { projects } from './Projects';
import coinIMG from '/src/Assets/coin-sprite.png'
import { Coin, CoinText, DescriptionPanel, DescriptionTitle, ProjectCard, ProjectLinkCard, ScrollableRow } from './MyProjectsStyle';

const MyProjectsContent = () => {
    const [selected, setSelected] = useState(projects[0]);

    return(
        <div>
            <ScrollableRow>
                {projects.map(project => (
                    <ProjectCard
                        key = {project.id}
                        selected = {selected.id === project.id}
                        onClick={() => setSelected(project)}
                    >
                        <Cartridge gameImage={project.image}/>
                    </ProjectCard>
                ))}
            </ScrollableRow>

            <DescriptionPanel>
                <DescriptionTitle>
                    {'[ '}{selected.title}{' ]'}
                </DescriptionTitle>

                {selected.description}

                <ProjectLinkCard>
                    <a href={selected.link} target="_blank">
                        <Coin src={coinIMG} alt={`link to ${selected.title}`}/>
                    </a>
                    <CoinText>
                        INSERT COIN
                    </CoinText> 

                </ProjectLinkCard>
            </DescriptionPanel>
        </div>
    )
};

export default MyProjectsContent;