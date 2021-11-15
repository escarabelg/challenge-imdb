import React from 'react'
import { useRoutes } from 'react-router'

// components
import { Home } from '../pages/Home'
import { Movie } from '../pages/Movie'

export function Router() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: ":id", element: <Movie /> },
  ])
  return routes;
}

