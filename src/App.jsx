import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileCard from './Components/Profile/ProfileCard';
import ProfileDetail from './Components/Profile/ProfileDetail';

const App = () => (
  <Routes>
    <Route path="/" element={<ProfileCard />} />
    <Route path="/profile/:id" element={<ProfileDetail />} />
  </Routes>
);

export default App;
