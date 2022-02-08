const INITIAL_STATE = {
    cart: []
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDITEM":

            const checkItem = state.cart.findIndex(product => product.id === action.payload.id)

            if (checkItem !== -1) {
                const newCart = [...state.cart]
                newCart[checkItem].quantity += Number(action.payload.quantity)
                return {
                    cart: newCart
                }


            } else {
                const newCart = [...state.cart]
                newCart.push(action.payload)
                return {
                    cart: newCart
                }
            }


        case "UPDATEITEM":
            return {

            }


        default: return state
    }
}