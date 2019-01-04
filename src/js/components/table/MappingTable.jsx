import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { buildTable } from "./MappingTableUtils";

@connect(
    state => ({
        loading: state.loading,
        posts: state.posts
    })
)

export default class MappingTable extends React.PureComponent {
    static propTypes = {
        loading: PropTypes.bool,
        posts: PropTypes.array
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.loading !== nextProps.loading;
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { posts, loading } = this.props;

        if (loading && posts.length === 0) return null;

        const table = buildTable(posts);

        return (
            <div className={"mapping-component"}>
                {table}
            </div>
        );
    }
}