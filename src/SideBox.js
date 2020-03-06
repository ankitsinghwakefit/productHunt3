import React from "react";
import ReactDOM from "react-dom";
import "./sidebox.css";
// import i1 from './image/i1.jpeg'
function SideBox(props){
    return(
        <div className="sidecontainer">
            <div className="workingDiv">
                <h4>Makers working today</h4>
                <div className="workingImgDiv">
                    <div className="woringImg"><img src="/image/i1.jpeg" /></div>

                    <div className="woringImg"><img src="/image/i2.jpeg" /></div>

                    <div className="woringImg"><img src="/image/i3.jpeg" /></div>

                    <div className="woringImg"><img src="/image/i4.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i5.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i1.jpeg" /></div>

                    <div className="woringImg"><img src="/image/i10.jpeg" /></div>

                    <div className="woringImg"><img src="/image/i12.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i1.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i5.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i4.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i3.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i2.jpeg" /></div>
                    <div className="woringImg"><img src="/image/i1.jpeg" /></div>
                    
                </div>
                <hr></hr>
                <p>START WORKING NOW</p>
            </div>
            <h4>Newsletter</h4>
            <div className="sideBoxBackgroundImage">
            
            </div>
            <div className="sideBoxDiv1">
                Remote teams, this is for you
            </div>
            <div className="subscribeBox">
                <span className="SubscribeSpanBox">Get the best new products in your inbox, every day 👇</span>
                <input className="subscribe" type="email" placeholder="Your email" />
                <button className="subscribeBtn">SUBSCRIBE</button>
            </div>

            <h4>Story of the week</h4>
            <div className="sideBoxBackgroundImage2">
            <img src="https://ph-files.imgix.net/b612f827-504f-4308-9118-e6b511d75e2b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=330&h=100&fit=crop"></img>
            </div>
            <div className="sideBoxDiv1">
            What It’s Like Managing 10 Million Users As a Solo Developer
            </div>
            <div className="subscribeBox">
                <span className="SubscribeSpanBox">BY SVEN VAN DER ZEE</span>
                <hr></hr>
                <p>READ MORE STORIES</p>
            </div>
            <form className="cardForm">
                <div className="subscribeBox">

                <input type="text" name="image" onChange={props.handelForm} placeholder="Enter image address" className="subscribe"></input>

                <input type="text" name="name" onChange={props.handelForm} placeholder="Heading" className="subscribe"></input>

                <input type="text" name="description" onChange={props.handelForm} placeholder="About paragraph" className="subscribe"></input>

                <button type="submit" onClick={props.createCard}className="subscribeBtn">Add</button>
                </div>
            </form>
        </div>
    )}

export default SideBox;