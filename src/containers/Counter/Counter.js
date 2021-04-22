import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
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
        ctr: state.ctr.counter,
        result: state.rslt.result
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCount: () => dispatch(actionCreators.increment()),
        onDecrementCount: () => dispatch(actionCreators.decrement()),
        onAddCount: () => dispatch(actionCreators.add(10)),
        onSubstractCount: () => dispatch(actionCreators.substract(10)),
        onStoreResult: (resultValue) => dispatch(actionCreators.store(resultValue)),
        onRemoveResult: (id) =>  dispatch(actionCreators.remove(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);