import { createContext, useContext, useState, ReactNode } from 'react';

type ContentContextType = {
  content: string;
  setContent: (content: string) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

type ContentProviderProps = { children: ReactNode };

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState("");

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};