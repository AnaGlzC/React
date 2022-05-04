const initialState = {
    amount:0,
}

export default  (state = initialState, action) => {

    switch (action.type) {
        case "DEPOSIT_MONEY":
            
        return{
            ...state,
            amount: state.amount + 10
        }

        case "WITHDRAW_MONEY":
            
        return{
            ...state,
            amount: state.amount - 10
        }
          
    
        default:
          return  state;
    }
}

   /* if (action.type === "DEPOSIT_MONEY") {
       
        return{
            ...state,
            amount: state.amount + 10
        }
        
    }
    if (action.type === "WITHDRAW_MONEY") {
       
        return{
            ...state,
            amount: state.amount - 10
        }
        
    }
    
    else{
        return state;
    }
    */
    
    
    
    

