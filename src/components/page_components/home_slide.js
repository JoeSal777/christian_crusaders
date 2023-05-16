import React from 'react';

function Jumbotron(props){
    return(
        <div className="jumbo_outer">
            <div className="jumbo_inner">
                <div className="title-jumbo, large-heading">
                    <h2>{props.greeting}</h2>
                </div>
            </div>
        </div> 
    );
}
export default Jumbotron;