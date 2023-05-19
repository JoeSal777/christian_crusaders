import React from 'react';

function Jumbotron(props){
    return(
        <div className="jumbo_outer global_outter">
            <div className="jumbo_inner global_inner">
                <div className="jumbo_content global_content">
                    
                    <div className="title-jumbo large-heading">
                        <h2>{props.greeting}</h2>                       
                    </div>

                    <div className='subjumboElements'>
                        <div className="rightItem-jumbo">
                            <p>{props.leftItem}</p>                       
                        </div>

                        <div className="leftItem-jumbo">
                            <p>{props.rightItem}</p>                       
                        </div>
                    </div>

                </div>
            </div>
        </div> 
    );
}
export default Jumbotron;