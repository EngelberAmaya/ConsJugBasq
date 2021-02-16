export interface PlayersResponse {
    data: Player[];
    meta: Datos[];
}

export interface Player {
	id: number;
	first_name: string;
	height_feet: null | number;
	height_inches: null | number;
	last_name: string
	team: Team[];
	position: string;
	weight_pounds: null | number;
}


export interface Team {
	id: number;
	abbreviation: string;
	city: string;
	conference: string;
	division: string;
	full_name: string;
	name: string;
}

export interface Datos {
	total_pages: number;
	current_page: number;
	next_page:  number;
	per_page: number;
	total_count: number;
}


// https://medium.com/@MisterCG/c%C3%B3mo-hacer-un-crud-paso-a-paso-sin-necesitar-una-base-de-datos-en-angular-eb3910777e57

// crud sin base de datos, pero hay que instalar una libreria,el repositorio es Angular-form-master
