export interface jwt {
    access_token: string | undefined;
    fullname: string | undefined;
    id: number | undefined;
    role: string | undefined;
    username: string | undefined;
    image: string | undefined;
  }

  export class getJwt {
    static readonly type = "[JWT]: get jwt";
    constructor(public payload: jwt) {} 
  }