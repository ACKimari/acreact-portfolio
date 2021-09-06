import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Portfolio() {
    return (
        <div>
            <Header/>
            <h2 id="projects">My Work/Projects</h2>
            <img href="https://magnetmoss.github.io/Lets-Settle-It/" src="../../Assets/LetsSettleItProject.png" alt="Image of Let's Settle It application page" style="width: 100%"/>
            <h3><a href="https://magnetmoss.github.io/Lets-Settle-It/">Project 1</a></h3>
            <p>This Project was built and developed by a group of four individuals including me. We created it from an idea rooted in individual struggles when it comes to making decisions. Therefore, our web application is here to settle that issue for those of us who struggle with indecisiveness. Additionally our web application generates a random movie with every reset for our Movie lovers.</p>
            <img src="../../Assets/hobnob-project2.png" alt="light in a crafted masonjar" style="width: 100%"/>
            <h3><a href="https://hobnob-project.herokuapp.com/">Project 2</a></h3>
            <p>Our Application, Hobnob, allows the user to create and seek out local events near them. As a user you can create and manage your own personal events linked to your profile. You can also seek out other users events on an event board and save/bookmark them to your profile.</p>
            <img src="../../Assets/capstone-thumbnail.jpg" alt="light in a crafted masonjar" style="width: 100%"/>
            <h3>Project 3</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, molestiae.</p>
            <Footer/>
        </div>
    )
};