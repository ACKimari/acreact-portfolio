import React from 'react';
import ProjectOne from '../Assets/LetsSettleItProject.png';
import ProjectTwo from '../Assets/hobnob-project2.png';
import ProjectThree from '../Assets/QuotesProject.png';

export default function Portfolio() {
    return (
        <div>
            <h2 id="projects">My Work/Projects</h2>
            <img href="https://magnetmoss.github.io/Lets-Settle-It/" src={ ProjectOne } alt="Let's Settle It application page" style={{ width: "50%" }}/>
            <h3><a href="https://magnetmoss.github.io/Lets-Settle-It/">Project 1</a></h3>
            <p>This Project was built and developed by a group of four individuals including me. We created it from an idea rooted in individual struggles when it comes to making decisions. Therefore, our web application is here to settle that issue for those of us who struggle with indecisiveness. Additionally our web application generates a random movie with every reset for our Movie lovers.</p>
            <img src={ ProjectTwo } alt="Events Application" style={{ width: "50%" }}/>
            <h3><a href="https://hobnob-project.herokuapp.com/">Project 2</a></h3>
            <p>Our Application, Hobnob, allows the user to create and seek out local events near them. As a user you can create and manage your own personal events linked to your profile. You can also seek out other users events on an event board and save/bookmark them to your profile.</p>
            <img src={ ProjectThree } alt="Quotes Application" style={{ width: "50%" }}/>
            <h3><a href="https://mezcal-lol-4am.herokuapp.com/">Project 3</a></h3>
            <p>Mind retreat is our Quotes App that will allow you to view a random quote or select from categories of quotes for you to find inspiration, gain motivation, and break whatever excessive mood you may be experiencing at the time.​</p>
        </div>
    )
};