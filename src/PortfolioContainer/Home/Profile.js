import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Service from './Service/service';
import './Profile.css';
import profilePhoto from '../../Assert/ProfileImage.png';
import Resume from '../../Assert/Resume.pdf';

export default function Profile() {
    return (
        <>
            <div className='Profile'>
                <div className='Profile-content'>
                    <h1>MRITUNJAY KUMAR</h1>
                    <p class="information">
                        Hi, My name is mritunjay kumar from india, Hiring me to improve and grow your business.
                    </p>
                    <button class="Profile-container-btn">
                        <span class="resume">Download</span>
                        <a href={Resume} download>
                            <span class="shopping-cart"><i style={{ color: "#ffffff" }} class='bx bxs-download'></i></span>
                        </a>
                        <span class="buy">My Resume</span>
                    </button>
                    <ul>
                        <li><a href='https://www.facebook.com/profile.php?id=100088604454459' target="_blank"><i class='bx bxl-facebook-circle'></i></a></li>
                        <li><a href='https://twitter.com/Promocrux' target="_blank"><i class='bx bxl-twitter'></i></a></li>
                        <li><a href='https://www.instagram.com/promocrux/' target="_blank"><i class='bx bxl-instagram-alt' ></i></a></li>
                        <li><a href='https://www.youtube.com/channel/UCzGDWcS-LAn-2eqnjp6BvqQ' target="_blank"><i class='bx bxl-youtube'></i></a></li>
                        <li><a href='https://github.com/MritunjayKumar07' target="_blank"><i class='bx bxl-github'></i></a></li>
                        <li><a href='https://www.linkedin.com/in/promocrux-84a81225b/' target="_blank"><i class='bx bxl-linkedin-square' ></i></a></li>
                    </ul>
                </div>
                <img className='ProfileImage' style={{ width: "500px", height: "500px", float: "right" }} src={profilePhoto} />
                <img className='ProfileImage-mob' style={{ width: "400px", height: "400px", float: "right" }} src={profilePhoto} />
            </div>
            <Service/>
            <Footer/>
        </>
    )
}



