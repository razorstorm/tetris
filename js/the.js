const fps = 60.0;
const spf = 1.0/fps;

const dps = 20.0;
const spd = 1.0/dps;
let previousDropTimeStamp;
let tetromino = null;

const blockSize = 30;
const maxHeight = 20 * blockSize;
const maxWidth = 10 * blockSize;
let body = null;

$(document).ready(() => {
    init();
});

const types = ['i', 'o', 'l', 'j', 'z', 't'];
const colors = ['red', 'green', 'blue', 'yellow'];

function init() {
    body = $("#container");
    body.css({width: maxWidth + 'px', height: maxHeight + 'px', margin: '0px'});
    setInterval(runFrame, spf * 1000);
    previousDropTimeStamp = Date.now();
}

runFrame = () => {
    let currentTime = Date.now();
    // console.log(currentTime, previousDropTimeStamp, spd * 1000);
    if (currentTime > previousDropTimeStamp + spd * 1000) {
        previousDropTimeStamp = currentTime;
        if (tetromino) {
            const oldHeight = parseInt(tetromino.css('top'));
            if (oldHeight >= maxHeight - blockSize) {
                tetromino.remove();
                tetromino = null;
            } else {
                tetromino.css({top: oldHeight + blockSize + "px"});
            }
        } else {
            const type = types[Math.floor(Math.random() * types.length)];
            createTetromino(type);
        }
    }
};

createTetromino = (type) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    switch(type) {
        case 'i':
            body.prepend('<div id="tetromino"></div>');
            tetromino = $('#tetromino');
            tetromino.append('<div class="block" style="top: 0; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.css({top: 0, left: maxWidth / 2.0 - blockSize / 2.0, width: blockSize, height: blockSize, backgroundColor: color, borderColor: color});
            break;
        case 'j':
            body.prepend('<div id="tetromino"></div>');
            tetromino = $('#tetromino');
            tetromino.append('<div class="block" style="top: 0; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -'+ blockSize +'px; left: -'+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.css({top: 0, left: maxWidth / 2.0 - blockSize / 2.0, width: blockSize, height: blockSize, backgroundColor: color, borderColor: color});
            break;
        case 'l':
            body.prepend('<div id="tetromino"></div>');
            tetromino = $('#tetromino');
            tetromino.append('<div class="block" style="top: 0; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -'+ blockSize +'px; left: '+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.css({top: 0, left: maxWidth / 2.0 - blockSize / 2.0, width: blockSize, height: blockSize, backgroundColor: color, borderColor: color});
            break;
        case 'o':
            body.prepend('<div id="tetromino"></div>');
            tetromino = $('#tetromino');
            tetromino.append('<div class="block" style="top: 0; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');

            tetromino.append('<div class="block" style="top: -'+ 2 * blockSize +'px; left: '+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -'+ 2 * blockSize +'px; left: '+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.css({top: 0, left: maxWidth / 2.0 - blockSize / 2.0, width: blockSize, height: blockSize, backgroundColor: color, borderColor: color});
            break;
        case 't':
            body.prepend('<div id="tetromino"></div>');
            tetromino = $('#tetromino');
            tetromino.append('<div class="block" style="top: 0; left: -'+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -'+ blockSize +'px; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -'+ 2 * blockSize +'px; left: '+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');

            tetromino.append('<div class="block" style="top: -' + 2 * blockSize +'px; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.css({top: 0, left: maxWidth / 2.0 - blockSize / 2.0, width: blockSize, height: blockSize, backgroundColor: color, borderColor: color});
            break;
        case 'z':
            body.prepend('<div id="tetromino"></div>');
            tetromino = $('#tetromino');
            tetromino.append('<div class="block" style="top: 0; left: -'+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -'+ blockSize +'px; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');

            tetromino.append('<div class="block" style="top: -' + blockSize +'px; left: 0; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');
            tetromino.append('<div class="block" style="top: -' + 2 * blockSize +'px; left: '+ blockSize +'px; width: '+ blockSize +'px; height: '+ blockSize +'px"></div>');

            tetromino.css({top: 0, left: maxWidth / 2.0 - blockSize / 2.0, width: blockSize, height: blockSize, backgroundColor: color, borderColor: color});
            break;
    }
};
