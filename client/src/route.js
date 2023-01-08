import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


const HomePage = lazy(() => import('./pages/home'));


const AppRoutes = () => {
    return (
        <Suspense >
             <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
        </Suspense>
    )

}

export default AppRoutes;