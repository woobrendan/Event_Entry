export interface SetAndNav {
    compNav: (val: string) => void;
    handleFormElement: <T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        e: React.ChangeEvent<T>,
        driver?: string,
    ) => void;
}

export interface ClickAndNav {
    compNav: (val: string) => void;
    handleBoxClick: (name: string, val: string) => void;
}

export interface EventOrder {
    type: string;
    event: string;
    series: string;
    class: string;
    number: string;
    team: string;
    sponsors: string;
    vehicle: string;
    driver1: DriverInfoInterface;
    [key: string]: string | DriverInfoInterface;
}

export interface DriverInfoInterface {
    driverName: string;
    driverNAT: string;
    fiaCAT: string;
    hometown: string;
    email: string;
    cell: string;
}

export interface DriverObjInterface {
    [key: string]: DriverInfoInterface;
}
