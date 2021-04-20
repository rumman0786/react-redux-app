import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ActionTypes from '../../store/actionTypes';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCount} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCount}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCount}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubstractCount}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.result.map(singleResult => 
                        <li 
                        key={singleResult.id} 
                        onClick={() => this.props.onRemoveResult(singleResult.id)}>
                            {singleResult.value}
                        </li>
                    )}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        result: state.result
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCount: () => dispatch({type: ActionTypes.INCREMENT}),
        onDecrementCount: () => dispatch({type: ActionTypes.DECREMENT}),
        onAddCount: () => dispatch({type: ActionTypes.ADD, value: 10 }),
        onSubstractCount: () => dispatch({type: ActionTypes.SUBSTRACT, value: 10}),
        onStoreResult: () => dispatch({type: ActionTypes.STORE_RESULT}),
        onRemoveResult: (id) =>  dispatch({type: ActionTypes.REMOVE_RESULT, identifier: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);