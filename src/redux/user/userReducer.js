import { ADD_USER, LOGOUT } from "./actionTypes";


const initialState = {
    name : ""
}


 const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return{ ...state, name: action.payload }
        
        case LOGOUT :
            return{ initialState }
            
        
    
        default:
            return state;
    }

}

export default userReducer;



