export interface CreatePost {
    title: string; //- Название рецепта
    body: string; //- Краткое описание рецепта
    tags: string; //- Категория
    image: string; //- Ссылка на изображение
    favorite: boolean; //- Фаворит (рецепт в слайдере)
    timeCooking: number; //- Время приготовления
    foodValue: {
        calories: number; //- Калории
        fats: number; //- Жиры
        carbohydrates: number; //- Углеводы
        belki: number; //- Белки
    };
    additionalInformation: {
        ingredients: string[];
        details: [
        {
            title: string; //- Название детального шага
            body: string; //- Описание детального шага
        }
        ]
    }
}
