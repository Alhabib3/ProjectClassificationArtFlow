import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Purpose from './components/Purpose';
import Team from './components/Team';
import Background from './components/Background';
import Styles from './components/Styles';
import Professors from './components/Professors';
import FileUpload from './components/FileUpload';
import Informasi2 from './components/footer';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';
import Footer from './components/footer';

const App = () => {
  const [image, setImage] = useState(null);
  const [classification, setClassification] = useState('');

  const handleFileUpload = (file) => {
    setImage(URL.createObjectURL(file));
    classifyImage(file);
  };

  const classifyImage = async (file) => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.onload = async () => {
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      setClassification(predictions[0].className);
    };
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Home />
        <Background />
        <Team />
        <Styles />
        <Professors />
        <FileUpload />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
