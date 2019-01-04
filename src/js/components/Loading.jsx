import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

@connect(
    state => ({
        loading: state.loading
    })
)

export default class Loading extends React.PureComponent {
    static propTypes = {
        loading: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { loading } = this.props;

        return loading ?
            <div style={{ textAlign: 'center' }}>
                <h1>LOADING</h1>
            </div> :
            null
    }
}