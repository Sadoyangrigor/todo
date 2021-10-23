const response = [];
export default function taskList(state = response, action) {
  switch (action.type) {
    case "TASK_LIST_ALL":
      return action.payload;
    case "TASK_LIST_UPDATE":
      state.find(({id},i) =>{
        if(action.payload.id === id){
          delete action.payload.id
          for(var k in action.payload) {
            state[i][k] = action.payload[k]
          }
        }
      })
      return state
    case "TASK_LIST_REMOVE":
      for(let i = 0; i < state.length; i++) {
        if(state[i].id === action.payload) {
          state.splice(i, 1);
          break;
        }
      }
      return state
    case "TASK_LIST_ADD":
      return [action.payload,...state]
  }
  return state;
}
