import React from 'react'
import './CSS/Footer.css'

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
            {/* Where we will stick the relevent information to fill out the footer */}
                <hr />
                   <div className='row'>
                        <p>
                            &copy;{new Date().getFullYear()} Tabby Acatemy
                        </p>
                   </div>
            </div>
        </div>
    )
}
export default Footer;
/* To be used to fill out the footer with relevent information, but for now it looks too weird
<div className="row">   
                    
                    <div className="Column">
                        <h4>The Team</h4>
                        <ul className="Col-List">
                            <li>Paul Hankins</li>
                            <li>Hoan Nguyen</li>
                            <li>Caitlin Farmer</li>
                            <li>John Paul Hernandez</li>
                            <li>Zachary Ostrowksi</li>
                            <li>Patrick Allen</li>

                        </ul>
                    </div>
                    
                    <div className="Column">
                                               <ul className="Col-List">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="Column">
                        <h4>Some other dumbshit</h4>
                        <ul className="Col-List">
                            <li>Well this is beginning to look right atleast</li>

                        </ul>
                    </div>
                </div>
        */