import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from '../../style.js';

const SideBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [state, setState] = useState(false);

    const menuItems = [
        {
            text: 'Marketplace',
            path: '/main',
        },
        {
            text: 'FAQ',
            path: '/faq',
        },
        {
            text: 'Contact',
            path: '/contact',
        },
    ];

    const toggleDrawer = (open) => (event) => {
        setState(open);
    };

    return (
        <>
            <div onClick={toggleDrawer(true)} className={classes.sideBarBtn}>
                <span className={classes.sideBarBtnSpan}></span>
                <span className={classes.sideBarBtnSpan}></span>
                <span className={classes.sideBarBtnSpan}></span>
            </div>
            <Drawer
                className={classes.drawer}
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
                classes={{ paper: classes.drawerPaper }}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemText
                                style={{ textAlign: 'center', textTransform: 'uppercase', color: '#6FED9B' }}
                                primary={item.text}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default SideBar;
