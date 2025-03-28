import {useEffect, useState} from "react";  


export const LoadingScreen = () => {
   const [text, setText] = useState("Loading");
   const fullText = "<Welcome To My Portfolio... />";

   useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if (index === fullText.length) {
            clearInterval(interval);
        }
    }, 100);

    return () => clearInterval(interval);
});

    return (
    <div className="fixed insert-0 z-50 bg-cream text-brown-100 flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
            Welcome To My Portfolio... <span className=" animate-blink ml-1"></span>
            </div>

            <div className="w- [200px] h-[2px} bg-brown-800 rounded relative overflow-hidden"></div>
            <div className="w-[40%] h-full bg-cream-500 shawdow-[0_0_15px_#4A403A] animate-loading-bar">
                {""} 
            </div>    
        </div>
    );
}