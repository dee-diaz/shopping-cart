export interface FilterSidebarProps {
  onApply: (min?: number, max?: number) => void;
  priceRange: {
    min?: number;
    max?: number;
  };
}

export interface GenreFilterProps {
  selectedGenres: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PriceFilterProps {
  appliedValue: {
    min?: number;
    max?: number;
  };

  onApply: (min?: number, max?: number) => void;
}
