export interface IngredientesResponse {
    ingredients: Ingredient[];
}

export interface Ingredient {
    name:   string;
    image:  string;
    amount: Amount;
}

export interface Amount {
    metric: Metric;
    us:     Metric;
}

export interface Metric {
    value: number;
    unit:  string;
}
