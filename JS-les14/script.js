const block = document.querySelector('.lesson__block');

const blockCoords = block.getBoundingClientRect();
console.log(`Position: top(${blockCoords.top}), left(${blockCoords.left})`);