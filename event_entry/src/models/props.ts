export interface SetAndNav {
    compNav: (val: string) => void;
    handleFormElement: <T extends HTMLInputElement | HTMLSelectElement>(e: React.ChangeEvent<T>) => void;
}

export interface ClickAndNav {
    compNav: (val: string) => void;
    handleBoxClick: (name: string, val: string) => void;
}

export interface EventOrder {
    event: string;
    series: string;
    class: string;
    number: string;
    team: string;
    sponsors: string;
    vehicle: string;
}
