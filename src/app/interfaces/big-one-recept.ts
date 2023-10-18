export interface BigOneRecept {
  id: number;         // - id
  title: string;        //- название рецепта
  body: string;         //- краткое описание рецепта
  favorite: boolean;    // - ибранное
  timeCooking: number;  //- время приготовления
  user: {
    id: number;         //- id пользователя создавшего рецепта
    name: string;       //- название пользователя
    date: string;       //- дата создания рецепта
    image: string;      //- аватар пользователя
  },
  tags: string;         // - категория рецепта
  image: string;        // - изображение
  foodValue: {
    calories: number;   // - калории
    fats: number;       //- жиры
    carbohydrates: number;      // - углеводы
    belki: number;               //- белки
  },
  additionalInformation: {
    ingredients: [];
    details: [
      {
        title: string;          //- детальный шаг (название)
        body: string;            // - описание детальноог шага
      }
    ];
  };
  comments: [
    {
      id: number; //- id коментария
      body: string; //- текст
      postId: number; //- id рецепта
      dateCreated: string;// - дата постинга
      user: {
        id: number; //- id пользователя
        username: string; //- имя фамилия
      };
    }
  ];
}
