let inputStr = document.getElementById('type')

let div = document.querySelector('div')

function moveToDiv() {
    let splitArray = inputStr.value.split(',').map(item => item.trim()).filter(Boolean);
    let ol = document.createElement('ol');

    splitArray.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });

    div.innerHTML = '';
    div.appendChild(ol);
};


inputStr.addEventListener('input', moveToDiv)

