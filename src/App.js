// import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Postdetails from './page/Postdetails';
import PostList from './page/PostList';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<Postdetails />} />
        <Route path="/PostName" element={<PostName />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
