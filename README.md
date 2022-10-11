
# Quiz Expert 

This is a demo project which have some functionality to play quiz according to
the topics.



## Technology

This SPA is created based on React .

- React Router 
- Bootstrap 
- NPM 
- CRA
- HTML React Parser
- Github 
- Netlify to deploy the app 


## External Elements Used 
- Fontawesome
- Recharts
- React-Toastify 


## Features
- User can explore quiz according to interest on the app.
- This app Load data From API and use React Router to navigate.So, Among views of various components in this application,React Router allows changing the browser URL, and keeps the UI in sync with the URL.
- The app fetch  data with the help of React Router Loader. It is easy to implement.
- This app used Recharts to show the analytical information about the quiz .
- User can see the correct answer ,judge the selected answer to check correct or wrong .
- This app shows the total number of correct and wrong answer 
- This app provide some FAQ based on the Web development in the 'Blog' menu in the navbar.

## Some interesting approach
- First of all , questions which are fetching from API were not in  the text format by default. 
    Example: 
    ### `<p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">How would you set a purple background color to an element?</span></p>`
    To solve this ,here  used HTML React Parser and some css to get the actual 
    format of text .
    Output :
    ### `How would you set a purple background color to an element? `
- To show the total number of correct and wrong answered questions in the perfect postion,I used 'fixed' position
    for the 'md' devices . For the 'sm' or 'xs'  devices used some tricks of d-none ,d-block.
- Also used many interesting and cool things of Bootstrap here .Example : Carousel, Accordion
    etc.
## How to use
Live website : https://splendid-entremet-f84b90.netlify.app/
