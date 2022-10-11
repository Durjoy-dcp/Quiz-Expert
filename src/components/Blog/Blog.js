import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className='my-5 container'>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>    what is the purpose of using react router?</Accordion.Header>
                    <Accordion.Body>
                        To make a Single Page Appplication(SPA) with react ,it is necessary to make route for the all nav link to go on the page directly without reloading the page . And here we get the help from React Router .React router is a standard library for routing in React .It enables the navigation among views of various components in the SPA,allow changing the browser URL,and keep the UI sync according to the URL.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> How does Context API works?</Accordion.Header>
                    <Accordion.Body>
                        When it is time to talk about the SPA ,we have to share data commonly in many components by the 'children perents' method .This is called props drilling .But for sharing data among two or three components ,it is Ok .But when we have to use same data among many components ,then it is frustrating to implement. Then we should use React Context API ,it is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>      Do you want to know about useRef hook of React?</Accordion.Header>
                    <Accordion.Body>
                        The hook useRef can be used to track the renders of the SPA(Single Page Application).This hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;