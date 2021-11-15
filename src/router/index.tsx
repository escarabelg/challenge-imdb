import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// components
import { Home } from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

