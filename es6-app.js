const printFunction = () => {
    let text = document.createElement('P');
    text.innerText = 'hi';
    let zone = document.getElementById('compile-zone');
    zone.appendChild(text);
                                };
printFunction();