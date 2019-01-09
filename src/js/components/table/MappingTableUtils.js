import React from 'react';
import Button from '@material-ui/core/Button';

export function buildTable(mappingInfo, toggleModal) {
    let mappingList = [];

    mappingInfo.map((mapping) => {
        const {id, userId, title, body} = mapping;
            mappingList.push(
                <tr>
                    <td>{id}</td>
                    <td>{userId}</td>
                    <td>
                        <Button onClick={toggleModal} variant={"contained"} color={"primary"} key={id}>
                        Show details
                        </Button>
                    </td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            )
    });

    return (
        <table className="mapping-table">
            <thead>
            <tr>
                <th scope="col">ADMIN ID</th>
                <th scope="col">GOBI ID</th>
                <th scope="col">Details</th>
                <th scope="col">DESCRIPTION</th>
            </tr>
            </thead>
            <tbody>
                {mappingList}
            </tbody>
        </table>
    )
}