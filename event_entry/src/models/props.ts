export interface SetAndNav {
    compNav: (val: string) => void;
    handleFormElement: <T extends HTMLInputElement | HTMLSelectElement>(e: React.ChangeEvent<T>) => void;
}
