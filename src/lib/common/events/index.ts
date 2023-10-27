import EVENTS from "$lib/common/constants/events";
import { handleCreatePost, handleUpdateUser } from "./handlers";
import type { UpdateProfilePayload } from "./handlers/interfaces";


export async function switchEvents(event: string, payload: any){
    switch(event){
        case EVENTS.SEARCH_TERM:
          handleCreatePost<string>(payload);
          break;
        case EVENTS.UPDATE_PROFILE:
          handleUpdateUser<UpdateProfilePayload>(payload)
    }
}

