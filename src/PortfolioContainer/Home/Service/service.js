import React, { useState, useEffect } from 'react'
import './service.css';
// import data from '../../../Assert/APIService.json';

const Service = () => {
    const[img, setImg] =useState("");
    const[link, setLink] =useState("");
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch("https://mritunjaykumarstudent.github.io/ProjectInfo/Portfolio.json")
          .then(res => res.json())
          .then(
            (result) => {
              setData(result);
            }
          )
      }, [])

    return (
        <>
            <div id='Profile-Service'>
                <div className='Profile-Service-list'>
                    <div className='container'>
                        <h2>My Service</h2>
                        <div className='service'>
                            <ul className='ul'>

                                {
                                    data.map((service, index) => (
                                        <li key={index} className="li">
                                            <i class={service.ico}></i>
                                            <p className="serviceP" onClick={()=>{
                                                setImg(service.img);
                                                setLink(service.url);
                                            }}>{service.name}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='img'>
                                <img style={{ width: "300px", height: "300px", borderRadius: "25px" }} src={img?img:"https://user-images.githubusercontent.com/117168137/219394987-02b246f9-37f8-4e09-b463-12bba1df430e.png"} alt='MyService' />
                                <a href={link?link:"https://github.com/MritunjayKumar07"} target="_blank">See This</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
