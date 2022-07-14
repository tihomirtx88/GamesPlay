import { getUserData } from "../util.js";

export function addSession(ctx,next){
   ctx.user = getUserData();
   next();
}
//проверява дали има потребител