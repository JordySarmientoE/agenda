import AuthActions from "../actions/authAction";

export const initialState = {
    isLogged: false,
    data: {}
}

export default function authReducer(state, action) {
    switch (action.type) {
        case AuthActions.LOGIN:
            return { ...state, isLogged: true, data: action.payload }
        case AuthActions.LOGOUT:
            return { ...state, ...initialState }
        default:
            return { ...state };
    }
}