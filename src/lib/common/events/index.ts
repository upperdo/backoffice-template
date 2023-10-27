import EVENTS from "$lib/common/constants/events";

export async function switchEvents(event: string, payload: any){
    switch(event){
        case EVENTS.SEARCH_TERM:
          handleCreatePost(payload);
          break;
        case EVENTS.UPDATE_PROFILE:
          handleUpdateUser(payload)
    }
}

function handleUpdateUser(payload: any) {
    console.log("Handling 'update_profile' event with payload:", payload);
}
  
function handleCreatePost(payload: any) {
    console.log("Handling 'create_post' event with payload:", payload);
}