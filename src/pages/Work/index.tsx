import * as React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from '../Home';
import DigitalMarketing from './DigitalMarketing';
import SubtleT from './SubtleT';
import SmartMirror from './SmartMirror';
import TorontoTube from './TorontoTube';

export interface IProps {
    
}

const Work: React.FC<IProps> = (props: IProps) => {
    const {} = props
    
    return (
        <Routes>
            <Route path={'digital-marketing'} element={<DigitalMarketing />} />
            <Route path={'subtle-t'} element={<SubtleT />} />
            <Route path={'smart-mirror'} element={<SmartMirror />} />
            <Route path={'toronto-tube'} element={<TorontoTube />} />
            <Route path={'*'} element={<Home />} />
        </Routes>
    )
}

export default Work