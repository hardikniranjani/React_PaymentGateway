import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


const HomePage = lazy(() => import('./pages/home'));
const Success = lazy(() => import('./pages/success'));

const AppRoutes = () => {
    return (
        <Suspense >
             <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
        </Suspense>
    )

}

export default AppRoutes;