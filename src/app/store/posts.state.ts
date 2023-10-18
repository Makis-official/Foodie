import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AddPost, DeletePost, arrayPost } from "./model/allAdminPost.model";

@State<arrayPost>({
    name: 'posts',
    defaults: {
        items: []
    }
})


@Injectable()
export class PostsState {

    @Action(AddPost)
    AddPost({getState, patchState}: StateContext<arrayPost>, 
      {payload}: AddPost) {
          const state = getState();
          patchState({
              items: [...state.items, payload]
          });
      };


    @Action(DeletePost)
    remove({getState, patchState}: StateContext<arrayPost>, 
    {payload}: DeletePost) {
        const state = getState();
        patchState({
            items: state.items.filter(todo => todo.id !== payload)          
        });
    };

    @Selector()
    static getPostsObject(state: arrayPost) {
        return state.items;
    };

}