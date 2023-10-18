import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AddSubPost, DeleteSubPost, arraySubPost } from "./model/subPost.model";

@State<arraySubPost>({
    name: 'SubPosts',
    defaults: {
        items: []
    }
})


@Injectable()
export class SubPostsState {

    @Action(AddSubPost)
    AddSubPost({getState, patchState}: StateContext<arraySubPost>, 
      {payload}: AddSubPost) {
          const state = getState();
          patchState({
              items: [...state.items, payload]
          });
      };


    @Action(DeleteSubPost)
    removeSubPost({getState, patchState}: StateContext<arraySubPost>, 
    {payload}: DeleteSubPost) {
        const state = getState();
        patchState({
            items: state.items.filter(todo => todo.id !== payload)          
        });
    };

    @Selector()
    static getSubPostsObject(state: arraySubPost) {
        return state.items;
    };

}