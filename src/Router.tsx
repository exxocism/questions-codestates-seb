import { Outlet, createBrowserRouter } from 'react-router-dom';

import { Locations } from './constants';

import { CenteredScreen, Main } from './components/Screen';
import Header from './components/Header';
import Footer from './components/Footer';

import ProductList from './pages/ProductList';
import BookMark from './pages/Bookmark';

export const router = createBrowserRouter([
  {
    path: Locations.HOME,
    element: (
      <Main>
        <CenteredScreen>
          <Header />
          <Outlet />
          <Footer />
        </CenteredScreen>
      </Main>
    ),
    children: [
      {
        path: Locations.HOME,
        element: <ProductList />,
      },
      {
        path: Locations.BOOKMARK,
        element: <BookMark />,
      },
    ],
  },
]);
