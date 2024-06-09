import { Outlet } from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScreenSize from './components/devComponent/ScreenSize';
import Navigation from './components/nav/Navigation';

function App() {
  return (
    <div className="app-container h-screen w-screen flex flex-col bg-[url('/dragon-scales.svg')]">
      <Header />
      <body className="flex flex-row w-full h-full overflow-hidden">
        <Navigation />
        <Outlet />
      </body>
      <Footer />
      <ScreenSize />
    </div>
  );
}

export default App;
