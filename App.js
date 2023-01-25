import logo from './logo.svg';
import HomePage from './HomePage';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UploadPage from './UploadPage'
import AboutPage from './AboutPage'
import AccountPage from './AccountPage'
import SettingsPage from './SettingsPage'
import DatasetsPage from './DatasetsPage'
import DatasetPage from './DatasetPage'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="upload" element={<UploadPage/>} />
        <Route path="account" element={<AccountPage/>} />
        <Route path="settings" element={<SettingsPage/>} />
        <Route path="datasets" element={<DatasetsPage/>} />
        <Route path="dataset" element={<DatasetPage/>} />
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
