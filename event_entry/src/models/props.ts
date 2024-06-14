export interface SetAndNav {
	compNav: (val: string) => void;
	handleFormElement: <T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
		e: React.ChangeEvent<T>,
		driver?: string
	) => void;
}

export interface ClickAndNav {
	compNav: (val: string) => void;
	handleBoxClick: (name: string, val: string) => void;
}
