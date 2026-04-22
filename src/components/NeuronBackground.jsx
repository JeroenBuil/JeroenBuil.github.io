import { useState, useEffect } from "react";

export const NeuronBackground = () => {
    const [neurons, setNeurons] = useState([]); // neurons have id, size, x, y, opacity
    const [axons, setAxons] = useState([]); // axons have id, size, x, y, delay, animationDuration
    const numberOfAxonsperNeuron = 50;
    let axonIdCounter = 0; // counter for unique axon ids
    
    useEffect(() => {
        // Regenerate neurons on window resize
        const handleResize = () => {generateNeurons()};
        window.addEventListener('resize', handleResize);

        generateNeurons();

        // Generate axons initially and on interval
        generateAxons(numberOfAxonsperNeuron);

        const interval = setInterval(() => {
            generateNeurons();
            generateAxons(numberOfAxonsperNeuron);
        }, 7000); // Regenerate axons after a specified interval

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(interval);
        };
    }, []);

    const generateNeurons = (density=100000) => {
        const numberOfNeurons = Math.floor(window.innerWidth * window.innerHeight) / density; // adjust density to change number of neurons
        const newNeurons = [];

        for (let i = 0; i < numberOfNeurons; i++) {
            newNeurons.push({
                id: i,
                size: Math.random() * 3 + 10, //generate random size between 1 and 4
                x: Math.random() * 100, // randomize position
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2 
            });
        };
        setNeurons(newNeurons); // set the generated neurons to state
    };

    const generateAxons = (numberOfAxons=10) => {
        if (neurons.length === 0) return; // If there are no neurons, don't generate axons

        const newAxons = [];
        // console.log("Window width:", window.innerWidth);

        // Pick a random neuron to sprout from
        const parentNeuron = neurons[Math.floor(Math.random() * neurons.length)];
        // Random angle (0 to 360 degrees)
        const angle = Math.random() * Math.PI * 2;
        // Random length for the axon
        const length = 1000 + 300 * Math.random();

        newAxons.push({
                id: axonIdCounter, // Unique ID
                startX: parentNeuron.x, // Start at neuron X
                startY: parentNeuron.y, // Start at neuron Y
                angle: angle,
                length: length,
                thickness: Math.random() * 1 + 0.5,
                delay: Math.random() * 2, // Random delay before growing
                duration: Math.random() * 3 + 2, // Growth speed
            });

        // console.log(`Meteor ${i} distance: ${newMeteors[i].distance}`);

        setAxons(prev => {
            // keep only the last N axons to prevent memory leak
            const updated = [...prev, ...newAxons]
            return updated.slice(-numberOfAxons); 
        });
            
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {/* Render Neurons */}
            {neurons.map((neuron) => (
                <div key={neuron.id} className='neuron'
                style={{
                    width: neuron.size + 'px',
                    height: neuron.size + 'px',
                    left: neuron.x + '%',
                    top: neuron.y + '%',
                    opacity: neuron.opacity,
                    animation: `pulse-subtle ${neuron.animationDuration}s ease-in-out infinite`,
                }}/> //'.neuron' class defined in index.css applies all the effects defined there
            ))}

            {/* Render Axons */}
            {axons.map((axon) => (
                <div key={axon.id} className='axon'
                style={{
                    // width: axon.size*40 + 'px',
                    // height: axon.size*1.5 + 'px',
                    // left: axon.x + '%',
                    // top: axon.y + '%',
                    // animation: `meteor ${axon.animationDuration}s linear`,
                    // animationDelay: axon.delay + 's',
                    // animationFillMode: 'both',
                    // '--meteor-distance': axon.distance + 'px',
                    left: `${axon.startX}%`,
                    top: `${axon.startY}%`,
                    width: `${axon.length}px`, // Length determines how far it grows
                    height: `${axon.thickness}px`,
                    // Rotate to the random angle
                    transformOrigin: 'left center', 
                    transform: `rotate(${axon.angle}rad)`,
                    animation: `grow-axon ${axon.duration}s ease-out forwards`,
                    animationDelay: `${axon.delay}s`,
                }}/> //'.axon' class defined in index.css applies all the effects defined there
            ))}
        </div>
        
    );
}