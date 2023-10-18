export interface SubPostInState {
    id: number; //- id рецепта
    title: string; //- название рецепта
    body: string;// - краткое описание
    favorite: boolean; //- избранное
    timeCooking: number; //- время приготовления
    user: {
      id: number, //- id пользователя
      name: string,// - имя фамилия пользователя
      date: string, //- дата создания рецептаi
      image: string// - ссылка на аватар пользователя
    };
    tags: string; //- категория рецепта
    image: string; //- ссылка на изображение
}

export interface arraySubPost {
    items: SubPostInState[];
}

export class DeleteSubPost {
    static readonly type = '[SubPost]: SubPost delete';
    constructor(public payload: number) {}
}

export class AddSubPost {
    static readonly type = "[SubPost] Add SubPost";
    constructor(public payload: SubPostInState) {}
}