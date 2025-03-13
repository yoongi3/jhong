export const ButtonVariants = {
    PANEL: 'PANEL',
    CLOSE: 'CLOSE',
} as const;

export type ButtonVariant = keyof typeof ButtonVariants;
