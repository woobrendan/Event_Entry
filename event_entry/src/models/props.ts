export interface SetAndNav {
    compNav: (val: string) => void;
    handleFormElement: <T extends HTMLInputElement | HTMLSelectElement>(e: React.ChangeEvent<T>) => void;
}

export interface ClickAndNav {
    compNav: (val: string) => void;
    handleBoxClick: (name: string, val: string) => void;
}
