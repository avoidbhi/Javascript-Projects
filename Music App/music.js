window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors = [
        "#60d394",
        "#d36060",
        "#60d394",
        "#d36060",
        "#60d394",
        "#d36060"
    ];
    //LEts have sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();


            createBubbles(index);
        });
    });


    //function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump is ease";
        bubble.addEventlistener('animationend', function(){
                visual.removeChild(this);
        });
    };
});
