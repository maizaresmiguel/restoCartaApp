
export interface MenuItemResponse {
    type:             string;
    menuItems:        MenuItem[];
    offset:           number;
    number:           number;
    totalMenuItems:   number;
    processingTimeMs: number;
    expires:          number;
    isStale:          boolean;
}

export interface MenuItem {
    id:                  number;
    title:               string;
    image:               string;
    imageType:           ImageType;
    restaurantChain:     string;
    servingSize:         null | string;
    readableServingSize: null | string;
    servings:            Servings;
}

export enum ImageType {
    GIF = "gif",
    Jpg = "jpg",
    PNG = "png",
}

export interface Servings {
    number: number;
    size:   number | null;
    unit:   null | string;
}

// --------------------------


export interface PlatoResponse {
    results:      Result[];
    offset:       number;
    number:       number;
    totalResults: number;
}

export interface Result {
    id:        number;
    title:     string;
    image:     string;
    imageType: ImageType;
    alt_img?:  string;
}

export enum ImageType {
   // Jpg = "jpg",
}

