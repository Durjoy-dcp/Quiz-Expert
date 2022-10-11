import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommonNavbar from './components/CommonNavbar/CommonNavbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';



function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        }, {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizid',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
          },
          element: <Quiz></Quiz>
        }

      ]
    }


  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
