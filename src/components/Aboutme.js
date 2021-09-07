import React from 'react';
import Image from '../Assets/capstone-thumbnail.jpg';

export default function Aboutme() {
    return (
        <div>
            <img className="display-flex align-center" src={ Image } alt="light in a crafted masonjar" style={{ width: "50%" }} />
            <h3><a href="https://kimariaw.wixsite.com/website">Meet Ann Christine Kimari</a></h3>
            <p>Coming from the beautiful country, Kenya, Ann Christine found her desire for coding rooted in her degree, BA in Art and Design. She appreciates well developed and designed websites. Her goal is to acquire web developing and design skills so as to create great webpages. She hopes to utilize her learned skills in her future work and to allow people in her country to see the beauty of coding beyond its complexity.</p>
        </div>
    )
}
