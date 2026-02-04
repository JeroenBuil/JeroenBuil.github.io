import { useState, useEffect } from "react";

export const StarBackround = () => {
    const [stars, setStars] = useState([]); // stars have id, size, x, y, opacity
    const [meteors, setMeteors] = useState([]); // meteors have id, size, x, y, delay, animationDuration
    const numberOfMeteors = 4;
    let meteorIdCounter = 0; // counter for unique meteor ids
    
    useEffect(() => {
        // Regenerate stars on window resize
        const handleResize = () => {
            generateStars()
        };
        window.addEventListener('resize', handleResize);

        generateStars(10000);
        // Generate meteors initially and on interval
        generateMeteors(numberOfMeteors);
        const interval = setInterval(() => {
            generateMeteors(numberOfMeteors);
        }, 7000); // Regenerate meteors after a specified interval
        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, []);

    const generateStars = (density=10000) => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight) / density; // adjust density to change number of stars
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, //generate random size between 1 and 4
                x: Math.random() * 100, // randomize position
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2 
            });
        };
        setStars(newStars); // set the generated stars to state
    };

    const generateMeteors = (numberOfMeteors=4) => {
        const newMeteors = [];
        // console.log("Window width:", window.innerWidth);

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: meteorIdCounter++, // unique id => necessary to trigger a new animation for each meteor
                size: Math.random() * 1 + 0.5, //generate random size between 1 and 1.5
                size: Math.random() * 1 + 0.5, //generate random size between 1 and 1.5
                x: Math.random() * 100, // randomize position
                y: Math.random() * 40, // only show meteors in the top of the screen
                delay: Math.random() * 4, // reduced delay to 0-2s for quicker start
                animationDuration: 4.5 + Math.random() * 3,
                // distance: -((Math.random() *2* window.innerWidth)+2000), // adjust meteor travel based on screen width => don't like it...
                distance: -(2000 + Math.random() * 1000),
            });
            // console.log(`Meteor ${i} distance: ${newMeteors[i].distance}`);
            console.log(`Meteor ${i} duration: ${newMeteors[i].animationDuration}`);
        };
        setMeteors(prev => [...prev, ...newMeteors].slice(-numberOfMeteors)); // keep only the last N meteors to prevent memory leak
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div key={star.id} className='star animate-pulse-subtle'
                style={{
                    width: star.size + 'px',
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',
                }}/> //'star' class defined in index.css applies all the effects defined there
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className='meteor'
                style={{
                    width: meteor.size*40 + 'px',
                    height: meteor.size*1.5 + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    animation: `meteor ${meteor.animationDuration}s linear`,
                    animationDelay: meteor.delay + 's',
                    '--meteor-distance': meteor.distance + 'px',
                    opacity: 0, // start invisible, will fade in with animation

                }}/> //'meteor' class defined in index.css applies all the effects defined there
            ))}
        </div>
        
    );
}