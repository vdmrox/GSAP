function slash1() {
    const main = new TimelineMax(); 
    const tl1 = new TimelineMax();
    const tl2 = new TimelineMax();

    // Ice removal animation sequence
    tl1.add(TweenMax.fromTo('#ice-1', 0.6, {clip: 'rect(0px 300px 250px 0px)'}, {clip: 'rect(0px 300px 250px 300px)', ease: Power4.easeOut, delay: 0.2}));
    tl1.add(TweenMax.fromTo('#ice-2', 0.4, {clip: 'rect(0px 300px 250px 0px)'}, {clip: 'rect(0px 0px 250px 0px)', delay: 0.8}));
    tl1.add(TweenMax.fromTo('#ice-top', 0.5, {clip: 'rect(0px 300px 250px 0px)'}, {clip: 'rect(0px 300px 250px 300px)', delay: 0.9}));
    tl1.add(TweenMax.fromTo('#ice-3', 0.7, {clip: 'rect(0px 300px 250px 0px)'}, {clip: 'rect(0px 0px 250px 0px)', delay: 0.6}));
    
    // Razor movement sequence
    tl2.set('#razor-item', {x:-500, y:-450, rotation:350});
    tl2.add(TweenMax.to('#razor-item', 1.4, {bezier:{type:"thru", values:[{x:250, y:-220}, {x:390, y:-460}]}, rotation: 225, ease: Power4.easeOut}));
    tl2.set('#razor-item', {y: -200,rotation:45});
    tl2.add(TweenMax.to('#razor-item', 1.5, {bezier:{type:"thru", values:[{x:0, y:-100}, {x:-360, y:-350}]}, rotation: 140, ease: Power4.easeOut}));
    tl2.set('#razor-item', {rotation:290});
    tl2.add(TweenMax.to('#razor-item', 0.9, {bezier:{type:"thru", values:[{x:400, y:-350}, {x:460, y:-450}]}, rotation: 250, ease: Power4.easeOut}));
    tl2.set('#razor-item', {y: -100,rotation:45});
    tl2.add(TweenMax.to('#razor-item', 2.2, {bezier:{type:"thru", values:[{x:0, y:-80}, {x:-360, y:-280}]}, rotation: 150, ease: Power4.easeOut}));
    tl2.add(TweenMax.from('#razor-ending-item', 0.8, {x: -100, ease:Elastic.easeOut.config(1, 1), delay: -0.8}));

    main.add(tl1, tl2);
    return main;
}

function start() {
    const master = new TimelineMax();
    master.append(slash1());
}

window.onload = start();