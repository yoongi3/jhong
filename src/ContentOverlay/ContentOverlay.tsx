import { useContent } from "../Providers/ContentProvider"
import AboutMeContent from "./Content/AboutMeContent";
import ContactMeContent from "./Content/ContactMe";
import MyProjectsContent from "./Content/MyProjectsContent";
import { ContentWrapper, HeaderContainer, OverlayWrapper, Title } from "./ContentOverlayStyles";

  const ContentOverlay: React.FC = () => {
    const { content, setContent} = useContent();

    if (content === "") return null;

    return (
        <OverlayWrapper>
            <HeaderContainer>
                <Title>{content}</Title>
                <button onClick={() => setContent("")}>close</button>
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