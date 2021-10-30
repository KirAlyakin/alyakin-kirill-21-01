import React, {Fragment} from 'react'

function AsideList() {
    return (
        <Fragment>
            <h2>{this.props.type}</h2>
            <ul>
                <li><input type="checkbox"/>{this.props.name}</li>
                <li><input type="checkbox"/>{this.props.name}</li>
                <li><input type="checkbox"/>{this.props.name}</li>
                <li><input type="checkbox"/>{this.props.name}</li>
            </ul>
        </Fragment>
    );
}

export default AsideList;