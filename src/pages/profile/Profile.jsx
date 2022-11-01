import "./profile.css"
import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile(){
    return(
        <>
        <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">

                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/posts/2.jpg" alt="" />
                            <img className="profileUserImg" src="assets/person/1.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>       
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}