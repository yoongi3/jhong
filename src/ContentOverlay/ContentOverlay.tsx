import { useContent } from "../Providers/ContentProvider"
import AboutMeContent from "./Content/AboutMeContent";
import ContactMeContent from "./Content/ContactMe";
import MyProjectsContent from "./Content/MyProjectsContent";

  const ContentOverlay: React.FC = () => {
    const { content, setContent} = useContent();

    if (content === "") return null;

    return (
        <div style={{ background: "red", position: "absolute", top: "100px", height: "200px", width: "200px", zIndex: "5"}}>
            <button onClick={() => setContent("")}>close</button>
            {content === "about" && <AboutMeContent />}
            {content === "projects" && <MyProjectsContent />}
            {content === "contact" && <ContactMeContent />}
        </div>
    );
};

export default ContentOverlay;