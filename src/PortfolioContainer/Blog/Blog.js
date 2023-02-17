import React, { useState, useEffect } from 'react'
import './Blog.css';
// import BLOG from '../../Assert/Blog.json';

const Blog = () => {
    const colors = ['#ffaf00', '#da2268', '#bb02ff', '#02bcff', '#ff0202', '#2cff02', '#023dff', '#E96479', '#7DB9B6', '#F0A04B', '#183A1D', '#FFF4D2', '#CD5888', '#ECF9FF', '#F94A29', '#5D3891'];
    const [BLOG, setData] = useState([]);
    const [colour, setColour] = useState();
    useEffect(() => {
        fetch("https://mritunjaykumarstudent.github.io/ProjectInfo/Blog.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setColour(Math.floor(Math.random() * 16));
                }
            )
    }, [])

    return (
        <div className='Blog'>
            <div class="container">
                {
                    BLOG.map((Blog, index) => (
                        <div class="card" key={index} >
                            <div class="circle" style={{ background: colors[colour] }}>
                                <h2>{Blog.id}</h2>
                            </div>
                            <div class="content">
                                <p>{Blog.ShortPara}</p>
                                <a style={{ background: colors[colour] }} href={Blog.links} target="_blank">Read More</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog
