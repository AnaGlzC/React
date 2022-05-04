import { deposit, withdraw } from "../../store/amount/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
    return{
        amount: state.amountReducer.amount,
        
    };
    
};

const Counter = ({amount, deposit, withdraw}) => {
    return(
        <div>
            <h1>Amount: {amount} </h1>
            <button onClick={() => deposit()}>Add 10 </button>
            <button onClick={() => withdraw()}>Less 10</button>
        </div>
    );
};

export default connect(mapStateToProps,{deposit, withdraw}) (Counter);