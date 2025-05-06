import { createContext, useContext, useState, ReactNode } from "react";

interface DeckContextType {
  selectedDecks: string[];
  toggleDeck: (deckName: string) => void;
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

const DeckProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDecks, setSelectedDecks] = useState<string[]>([]);

  const toggleDeck = (deckName: string) => {
    setSelectedDecks((prevDecks) =>
      prevDecks.includes(deckName)
        ? prevDecks.filter((d) => d !== deckName)
        : [...prevDecks, deckName]
    );
  };

  return (
    <DeckContext.Provider value={{ selectedDecks, toggleDeck }}>
      {children}
    </DeckContext.Provider>
  );
};

const useDeck = () => {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error("useDeck must be used within a DeckProvider");
  }
  return context;
};

export { DeckProvider, useDeck };
