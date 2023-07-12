import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Events, {eventsLoader} from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvents from "./pages/EditEvents";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";



const routes = createBrowserRouter([
  {path: '/',
      element: <Root/>,
      errorElement:<Error />,
      children: [
          {index: true, element: <Home />},
          {path:'events', element: <EventsRoot />, children:[
                  {index: true, element: <Events />, loader:eventsLoader,},
                  {path:':eventId', element: <EventDetail />},
                  {path:'new', element: <NewEvent />},
                  {path:':eventId/edit', element: <EditEvents />}
              ]},

    ]}
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
