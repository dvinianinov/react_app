import React from 'react';

export function buildTable(mappingInfo) {
    let mappingList = [];

    mappingInfo.map((mapping) => {
        const {id, userId, title, body} = mapping;
            mappingList.push(
                <tr>
                    <td>{id}</td>
                    <td>{userId}</td>
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
                <th scope="col">TITLE</th>
                <th scope="col">DESCRIPTION</th>
            </tr>
            </thead>
            <tbody>
            {mappingList}
            </tbody>
        </table>
    )
}