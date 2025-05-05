import { useContent } from "../Providers/ContentProvider"
import Button from "../Reusable/Button/Button";
import { ButtonVariants } from "../Reusable/Button/ButtonVariants";
import AboutMeContent from "./Content/AboutMe/AboutMeContent";
import ContactMeContent from "./Content/ContactMe/ContactMe";
import MyProjectsContent from "./Content/MyProjects/MyProjectsContent";
import { ContentWrapper, HeaderContainer, OverlayWrapper, Title } from "./ContentOverlayStyles";

  const ContentOverlay: React.FC = () => {
    const { content, setContent} = useContent();

    if (content === "") return null;

    return (
        <OverlayWrapper>
            <HeaderContainer>
                <Title>{content}</Title>
                <Button variant={ButtonVariants.CLOSE} onClick={() => setContent("")}>close</Button>
            </HeaderContainer>
            <ContentWrapper>
                {content === "About Me" && <AboutMeContent />}
                {content === "My Projects" && <MyProjectsContent />}
                {content === "Contact Me" && <ContactMeContent />}
            </ContentWrapper>
        </OverlayWrapper>
    );
};

export default ContentOverlay;