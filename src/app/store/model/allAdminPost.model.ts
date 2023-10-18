export interface PostInState {
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

export interface arrayPost {
    items: PostInState[];
}

export class DeletePost {
    static readonly type = '[post]: post delete';
    constructor(public payload: number) {}
}

export class AddPost {
    static readonly type = "[Post] Add Post";
    constructor(public payload: PostInState) {}
}