import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Events, {eventsLoader} from "./pages/Events";
import EventDetail, {
    loader as eventsDetailLoader,
    action as deleteEventAction} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvents from "./pages/EditEvents";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import {action as manipulateEventAction} from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';




const routes = createBrowserRouter([
  {path: '/',
      element: <Root/>,
      errorElement:<Error />,
      children: [
          {index: true, element: <Home />},
          {
              path: 'newsletter',
              element: <NewsletterPage />,
              action: newsletterAction,
          },
          {path:'events', element: <EventsRoot />, children:[
                  {index: true, element: <Events />, loader:eventsLoader,},
                  {path: ':eventId',
                      id: 'event-detail',
                      loader: eventsDetailLoader,
                      children:[
                          {index: true, element: <EventDetail />,
                              action:deleteEventAction},
                          {path:'edit', element: <EditEvents />, action: manipulateEventAction}
                      ]},
                  {path:'new', element: <NewEvent />, action: manipulateEventAction},
              ]},

    ]}
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
