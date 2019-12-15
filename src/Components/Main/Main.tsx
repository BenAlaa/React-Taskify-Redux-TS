import  React  from 'react';
import MainSlider from './MainSlider/MainSlider';
import './Main.css';

export interface MainProps {
    
}
 
const Main: React.SFC<MainProps> = (props) => {
    return ( 
        // <div>Main</div>
        <MainSlider props={props} />
     );
}
 
export default Main;