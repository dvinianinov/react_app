import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { openDetailModal, closeDetailModal } from "../../actions";

@connect(
    state => ({
        modalOpen: state.modalOpen,
        users: state.posts
    }), dispatch => ({
        dispatchAction: dispatch
    })
)

export default class Detail extends React.PureComponent {

    static propTypes = {
        modalOpen: PropTypes.bool,
        dispatchAction: PropTypes.func.isRequired,
        users: PropTypes.array
    };

    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.dispatchAction(closeDetailModal())
    }

    render() {
        return (
            <Modal open={this.props.modalOpen}>
                <div className={'details'}>
                    <thead>
                    <tr>
                        <th scope="col">ADMIN ID</th>
                        <th scope="col">GOBI ID</th>
                        <th scope="col">Details</th>
                        <th scope="col">DESCRIPTION</th>
                    </tr>
                    </thead>
                    <Button onClick={this.closeModal} variant={"contained"} color={"primary"}>
                        Close
                    </Button>
                </div>
            </Modal>
        )
    }
}