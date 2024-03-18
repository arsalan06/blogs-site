import { lazy } from 'react';
import Loadable from '../components/Loadable';
import Layout from '../Layout/MainLayout';
import { useRoutes } from 'react-router-dom';
const BlogsListing = Loadable(lazy(() => import('../pages/blogs')));
const BlogDetail = Loadable(lazy(() => import('../pages/blogs/blogDetail')));
const MainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <BlogsListing />
    },
    {
      path: '/blog-detail/:id',
      element: <BlogDetail />
    }
  ]
};

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
