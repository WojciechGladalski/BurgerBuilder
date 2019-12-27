import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/*zmieniamy a na navlink, żeby używać routera*/}
        <NavLink
            to={props.link}
            //ustawiamy exact tu i w navigationitems zeby aktywny link był tylko w przypadku wybranego
            exact={props.exact}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;