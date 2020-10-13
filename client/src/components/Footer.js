import React from 'react'
// import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './CSS/Footer.css'

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className='row'>
                    <div className='col'>
                        <Button variant='outline-dark' className='ContactUs' onClick={ShowEmails}>
                            Contact Us!
                        </Button>
                    </div>

                    {/* excessive cols because idk a better way to make the space work better lmao */}
                    <div className='col'></div>
                    {/* <div className='col'></div> */}

                    <div className='col'>
                        <p>
                            Tabby Acatemy Incorpurrated <br/>
                            500 West Unipurrsity Meowvenue <br/>
                            Pawmond, LA 70402
                        </p>
                    </div>
                </div>
            {/* Where we will stick the relevent information to fill out the footer */}
            <hr />
                <div className='row'>
                    <div className='col'>
                        <div>
                            <p>
                                &copy;{new Date().getFullYear()} Tabby Acatemy | All Kittens Reserved | Purrs of Service | Privacy Pawlicy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    function ShowEmails(props){
        alert("johnpaul.hernandez@selu.edu | paul.hankins@selu.edu | hoan.nguyen@selu.edu | caitlin.farmer@selu.edu | zachary.ostrowksi@selu.edu | patrick.allen@selu.edu")
    }
}
export default Footer;
/* To be used to fill out the footer with relevent information, but for now it looks too weird
<div className="row">   
                    
                    <div className="col">
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
                    
                    <div className="col">
                                               <ul className="Col-List">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Some other dumbshit</h4>
                        <ul className="Col-List">
                            <li>Well this is beginning to look right atleast</li>

                        </ul>
                    </div>
                </div>
        */