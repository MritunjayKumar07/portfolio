import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='Footer' style={{ height:"40px", textAlign: "center", display:"flex", justifyContent:"center",placeItems:"center" }}>
                <ul style={{display:"flex", background:"none", marginTop:"15px"}}>
                    <li style={{listStyle:"none", padding:"8px", background:"none"}}><a href='https://www.facebook.com/profile.php?id=100088604454459' target="_blank"><i style={{color:"#FFCACA", background:"none", fontSize:"28px"}} class='bx bxl-facebook-circle'></i></a></li>
                    <li style={{listStyle:"none", padding:"8px", background:"none"}}><a href='https://twitter.com/Promocrux' target="_blank"><i style={{color:"#FFCACA", background:"none", fontSize:"28px"}} class='bx bxl-twitter'></i></a></li>
                    <li style={{listStyle:"none", padding:"8px", background:"none"}}><a href='https://www.instagram.com/promocrux/' target="_blank"><i style={{color:"#FFCACA", background:"none", fontSize:"28px"}} class='bx bxl-instagram-alt' ></i></a></li>
                    <li style={{listStyle:"none", padding:"8px", background:"none"}}><a href='https://www.youtube.com/channel/UCzGDWcS-LAn-2eqnjp6BvqQ' target="_blank"><i style={{color:"#FFCACA", background:"none", fontSize:"28px"}} class='bx bxl-youtube'></i></a></li>
                    <li style={{listStyle:"none", padding:"8px", background:"none"}}><a href='https://github.com/MritunjayKumar07' target="_blank"><i style={{color:"#FFCACA", background:"none", fontSize:"28px"}} class='bx bxl-github'></i></a></li>
                    <li style={{listStyle:"none", padding:"8px", background:"none"}}><a href='https://www.linkedin.com/in/promocrux-84a81225b/' target="_blank"><i style={{color:"#FFCACA", background:"none", fontSize:"28px"}} class='bx bxl-linkedin-square' ></i></a></li>
                </ul>
            </div>
        </>
    )
}

export default Footer
