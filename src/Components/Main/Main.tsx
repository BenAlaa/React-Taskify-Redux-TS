import  React  from 'react';
import MainSlider from './MainSlider/MainSlider';

export interface MainProps {
    
}
 
const Main: React.SFC<MainProps> = (props) => {
    return ( 
        // <div>Main</div>
        <MainSlider props={props} />
     );
}
 
export default Main;