import React, {Fragment} from 'react'
import './Sidebar.css'
function AsideList() {
    return (
        <Fragment>
            <h2>Морская рыба</h2>
            <ul>
                <li><input type="checkbox"/>Акула</li>
                <li><input type="checkbox"/>Окунь</li>
                <li><input type="checkbox"/>Палтус</li>
                <li><input type="checkbox"/>Треска</li>
            </ul>

            <h2>Пресная рыба</h2>
            <ul>
                <li><input type="checkbox"/>Белоглазка</li>
                <li><input type="checkbox"/>Осётр</li>
                <li><input type="checkbox"/>Речной угорь</li>
                <li><input type="checkbox"/>Налим</li>
            </ul>
        </Fragment>
    );
}

export default AsideList;