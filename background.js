const colors = [
    "#fc9aaf",
    "#aaaffa",
    "#b0ecff",
    "#9752c1",
    "#a9d5b9",
    "#ad848a",
    "#8283a1",
    "#0fbcf9",
    "#47b493",
    "#6d9180",
    "#faaf73",
    "#ff8d59",
    "#de8783",
    "#d2dae2",
    "#7c8894",
    "#ffa801",
    "#ffeda8",
    "#ffe9e8"
  ];
  
random1 = Math.floor(Math.random()*colors.length);
random2 = Math.floor(Math.random()*colors.length);
document.body.style.background=`linear-gradient(to right, ${colors[random1]}, ${colors[random2]})`;