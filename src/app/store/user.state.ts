import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { getJwt, jwt} from "./model/authUser.model";

@State<jwt>({
    name: 'jwtState',
    defaults: {
        access_token: undefined,
        fullname: undefined,
        id: undefined,
        role: undefined,
        username: undefined,
        image: undefined,
    },
})

@Injectable()
export class jwtState {



    @Action(getJwt)
  updateUserModel(ctx: StateContext<jwt>, action: getJwt) {
    ctx.patchState({
        access_token: action.payload.access_token,
        fullname: action.payload.fullname,
        id: action.payload.id,
        role: action.payload.role,
        image: action.payload.image,
        username: action.payload.username,
        
    });
  }

    @Selector()
    static getAuthObject(state: jwt) {
        return state;
      }

}