import React from 'react';
import { Link } from 'react-router-dom';
import Loading from "./Loading.jsx";
import Button from "./Buttom.jsx";
import MappingTable from "./table/MappingTable.jsx";

export default class MappingPage extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mapping-page">
                <h2>Load mapping</h2>
                <Button/>
                <Loading/>
                <h2>GOBI MAPPING</h2>
                <MappingTable/>
                <Link to="/form"><button>Open form</button></Link>
            </div>
        )
    }
}