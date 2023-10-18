export interface AdminOnePost {
    id: number;
    updated: boolean;
    updatedPost: {
        titl: string;
        body: string;
        tags: string;
        image: string;
        favorite: boolean;
        timeCooking: number;
        foodValue: {
        calories: number;
        fats: number;
        carbohydrates: number;
        belki: number;
    };
    additionalInformation: {
      ingredients: [];
      details: [
        {
          title: string;
          body: string;
        }
      ];
    };
  };
}
