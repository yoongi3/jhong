import { ButtonVariant, ButtonVariants } from "./ButtonVariants";
import { CloseButton, PanelButton } from "./ButtonStyles";

interface ButtonProps {
    variant: ButtonVariant;
    onClick: () => void;
    children: React.ReactNode;
};

const Button = ({variant, onClick, children}: ButtonProps) => {
    const ButtonComponent = (() => {
        switch (variant) {
            case ButtonVariants.PANEL:
                return PanelButton;
            case ButtonVariants.CLOSE:
            default:
                return CloseButton;
        }
    })();

    return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
}

export default Button;