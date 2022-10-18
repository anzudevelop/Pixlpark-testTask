import './App.module.css';
import s from './App.module.css'
import './fonts/stylesheet.css'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={s.content}>
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
