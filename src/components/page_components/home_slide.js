import React, { Component } from 'react';

//importing svg images
import ServiceConcierge from "./custom_svg/serviceConcierge_svg";
import ServiceLogo from "./custom_svg/serviceLogo_svg";
import ServicePrint from "./custom_svg/servicePrint_svg";
import ServiceProduct from "./custom_svg/serviceProduct_svg";
import ServiceWeb from "./custom_svg/serviceWeb_svg";


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
                                <ServiceLogo />
                                <ServiceProduct />
                                <ServiceWeb />
                                <ServicePrint />
                                <ServiceConcierge />
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