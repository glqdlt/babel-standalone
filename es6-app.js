const printFunction = () => {
    const text = document.createElement('P');
    text.innerText = 'hi';
    const zone = document.getElementById('compile-zone');
    zone.appendChild(text);
                                };
printFunction();