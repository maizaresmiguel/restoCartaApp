export interface NutrientesResponse {
    id?:                  number;
    title?:               string;
    price?:               null;
    likes?:               number;
    badges:              any[];
    nutrition:           Nutrition;
    images?:              string[];
    servingSize?:         null;
    readableServingSize?: null;
    numberOfServings?:    null;
    servings:            Servings;
    spoonacularScore?:    null;
    breadcrumbs:         string[];
    image?:               string;
    imageType?:           string;
    generatedText?:       null;
    restaurantChain?:     string;
}

export interface Nutrition {
    nutrients:        Nutrient[];
    caloricBreakdown?: CaloricBreakdown;
    calories?:         number;
    fat?:              string;
    protein?:          string;
    carbs?:            string;
}

export interface CaloricBreakdown {
    percentProtein?: number;
    percentFat?:     number;
    percentCarbs?:   number;
}

export interface Nutrient {
    name?:                string;
    amount?:              number;
    unit?:                Unit;
    percentOfDailyNeeds?: number;
}

export enum Unit {
    G = "g",
    Kcal = "kcal",
    Mg = "mg",
}

export interface Servings {
    number: number;
    size:   null;
    unit:   null;
}
