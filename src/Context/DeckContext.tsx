import { createContext, useContext, useState, ReactNode } from "react";

interface DeckContextType {
  selectedDecks: string[];
  toggleDeck: (deckName: string) => void;
  category: string[];
  addCategory: (newCategory: string) => void;
  removeCategory: (categoryToRemove: string) => void;
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

interface DeckProviderProps {
  children: ReactNode;
  initialCategory?: string[];
}

const DeckProvider = ({
  children,
  initialCategory = [],
}: DeckProviderProps) => {
  const [selectedDecks, setSelectedDecks] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>(initialCategory);

  const toggleDeck = (deckName: string) => {
    setSelectedDecks((prevDecks) =>
      prevDecks.includes(deckName)
        ? prevDecks.filter((d) => d !== deckName)
        : [...prevDecks, deckName]
    );
  };

  const addCategory = (newCategory: string) => {
    setCategory((prev) =>
      prev.includes(newCategory) ? prev : [...prev, newCategory]
    );
  };

  const removeCategory = (categoryToRemove: string) => {
    setCategory((prev) => prev.filter((c) => c !== categoryToRemove));
  };

  return (
    <DeckContext.Provider
      value={{
        selectedDecks,
        toggleDeck,
        category,
        addCategory,
        removeCategory,
      }}
    >
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
