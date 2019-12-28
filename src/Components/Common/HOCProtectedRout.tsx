import * as React from 'react';

export interface HOCProtectedRoutProps {
    
}
 
export default function(ComposedComponent: any) {
    const HOCProtectedRout: React.SFC<HOCProtectedRoutProps> = (props) => {
        return (
            <ComposedComponent {...props}/>
          );
    }
     
    return HOCProtectedRout;
}
