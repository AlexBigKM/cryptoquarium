import React from 'react'
import Container from '@material-ui/core/Container'
import {useStyles} from "../../style.js"

const Contact = () => {
    const classes = useStyles();

    return (
        <div style={{paddingTop: '50px'}}>
            <Container maxWidth="lg">
                <h1 style={{margin: '0', color: '#fff'}}>Contact page</h1>
                <p style={{color: '#fff'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint nostrum asperiores laudantium nihil eius! Voluptate totam impedit voluptatum non voluptatem dicta omnis officia! Blanditiis voluptas cupiditate illo dolor ullam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint nostrum asperiores laudantium nihil eius! Voluptate totam impedit voluptatum non voluptatem dicta omnis officia! Blanditiis voluptas cupiditate illo dolor ullam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint nostrum asperiores laudantium nihil eius! Voluptate totam impedit voluptatum non voluptatem dicta omnis officia! Blanditiis voluptas cupiditate illo dolor ullam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint nostrum asperiores laudantium nihil eius! Voluptate totam impedit voluptatum non voluptatem dicta omnis officia! Blanditiis voluptas cupiditate illo dolor ullam.
                </p>
            </Container>
        </div>
    );
}

export default Contact;
