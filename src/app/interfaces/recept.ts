export interface Recept {
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
