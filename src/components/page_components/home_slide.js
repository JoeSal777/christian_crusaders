import React, { Component } from 'react';

//importing svg images
import ProcessDeliver from "./custom_svg/processDeliver_svg";


export default class Jumbotron extends Component {
    render() {

        const { greeting } = this.props

        return(
            <div className="jumbo_outer global_outter">
                <div className="jumbo_inner global_inner">
                    <div className="jumbo_content global_content">
                        
                        <div className="title-jumbo large-heading">
                            <h2>{greeting}</h2>                       
                        </div>

                        <div className='subjumboElements'>
                            <div className="rightItem-jumbo">
                                {/* svg images as props */}
                                <ProcessDeliver />
                            </div>

                            <div className="leftItem-jumbo">
                                {/* <p>{props.rightItem}</p>*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
        );
    }
}