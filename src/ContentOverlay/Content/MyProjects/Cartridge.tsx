import { CartridgeGraphic, CartridgeImage, Container } from "./CartridgeStyle";
import projectIcon from "/src/Assets/cartridge.png";

const Cartridge: React.FC<{ gameImage: string }> = ({ gameImage }) => {
    return (
        <Container>
            <CartridgeImage src={projectIcon} alt="Cartridge Background"/>
            <CartridgeGraphic src={gameImage} alt="Game Label"/>
        </Container>
    );
  }
  
  export default Cartridge;