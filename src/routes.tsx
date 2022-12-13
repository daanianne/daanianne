import * as React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

// pages to route to
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import { getLinkUrl } from './utils';

export interface IProps {
  
}

const routes: React.FC<IProps> = (props: IProps) => {
  const {} = props;
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/work"} element={<Home />} />
      <Route path={"/work/*"} element={<Work />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default routes