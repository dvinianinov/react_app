import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buildTable } from "./MappingTableUtils";
import { openDetailModal, closeDetailModal } from "../../actions";

@connect(
    state => ({
        loading: state.loading,
        posts: state.posts,
        modalOpen: state.modalOpen
    }), dispatch => ({
        dispatchAction: dispatch
    })
)

export default class MappingTable extends React.Component {

    static propTypes = {
        loading: PropTypes.bool,
        posts: PropTypes.array,
        dispatchAction: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
    }

    toggleDetailsModal(event) {
        const { modalOpen, dispatchAction } = this.props;

        if (modalOpen === undefined) return null;

        if (modalOpen) {
            dispatchAction(closeDetailModal());
        } else {
            dispatchAction(openDetailModal(event.target.value));
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.loading !== nextProps.loading;
    }

    render() {
        const { posts, loading } = this.props;

        if (loading && posts.length === 0) return null;

        const table = buildTable(posts, this.toggleDetailsModal);

        return (
            <div className={"mapping-component"}>
                {table}
            </div>
        );
    }
}