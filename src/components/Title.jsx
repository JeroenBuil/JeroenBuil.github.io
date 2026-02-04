import { cn } from '@/lib/utils';

// Title component to display the main title which is 'Welcome to my portfolio, this is a work in progress!'
export const Title = () => {
    return (
        <>
            <h1 className={cn("text-4xl md:text-6xl font-bold",
                "bg-gradient-to-r from-grey-200 to-grey-900 bg-clip-text ",
                "animate-fade-in", 
                "text-center mt-20 mb-10",
            )}>
                Jeroen's Portfolio!
            </h1>
            <h2 className={cn("text-1xl md:text-2xl font-medium text-center mb-20 text-foreground/70",
                
            )}>
                As you can see. It's still quite empty in here...
            </h2>
            <h2 className={cn("text-1xl md:text-2xl text-subtle-pulse-animation",
                "animate-fade-in delay-500 duration-1000", 
            )}>
                Don't worry! <br />Work is in progress and it will fill up soon!
            </h2>
        </>
    );
};