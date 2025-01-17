import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './auth/sign-in/index.jsx';
import Home from './home/index.jsx';
import Dashboard from './dashboard/index.jsx';
import AboutUs from './aboutUs/index.jsx';
import Features from './features/index.jsx';
import FAQ from './faq/index.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import PaperRecommendationPanel from './paperRecommendation/index.jsx';
import PaperReview from './paperReview/index.jsx';
import PaperEdit from './dashboard/researchPaper/[paperId]/edit/index.jsx'; // Updated import

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/researchPaper/:paperId/edit',
        element: <PaperEdit />,
      },
    ],
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/aboutUs',
    element: <AboutUs />,
  },
  {
    path: '/features',
    element: <Features />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/paperRecommendation',
    element: <PaperRecommendationPanel />,
  },
  {
    path: '/paperReview',
    element: <PaperReview />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
