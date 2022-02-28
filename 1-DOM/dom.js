function manipulateDom() {
    const quoteElement = document.querySelectorAll('.quote');

    quoteElement.forEach( item => {
        item.style.borderColor = "blue";
        item.style.backgroundColor = "lightblue";
        item.style.fontStyle= "italic";
    })
};

export { manipulateDom };