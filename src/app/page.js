'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';
import styles from '../styles/layout.module.css';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLoginClick = () => {
    setIsModalVisible(true);
  };

  const handleLoginSuccess = (data) => {
    setUserName(data.firstName);
    setIsModalVisible(false);
    alert(`Welcome, ${data.firstName}!`); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={handleLoginClick} />
      <main className="flex-grow grid grid-cols-2 grid-rows-2">
        <div className="bg-teal-700"></div>
        <div className="bg-orange-700"></div>
        <div className="bg-blue-900"></div>
        <div className="bg-orange-500"></div>
      </main>
      <footer className="bg-gray-200 text-center py-2">
        <p>&copy; Copyright 2024</p>
      </footer>
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <LoginForm
            onSuccess={handleLoginSuccess}
            onCancel={() => setIsModalVisible(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Home;