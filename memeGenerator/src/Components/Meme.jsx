import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Meme(){

    //create useState to ensure that properties of object are used for 
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg" 
    })

    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    
                    
                />

                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    
                    
                />

                <button className="form-button">
                    Get a new meme image 🖼
                </button>
                
            </form>
        </main>
    )
}