import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// components
import { Home } from '../pages/Home'
import { Movie } from '../pages/Movie'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

