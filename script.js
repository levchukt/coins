let clickCount = 0;
let autoClickers = 0;
let autoClickerCost = 10;

function updateClickCount() {
    document.getElementById('clickCount').textContent = `Slashes: ${Math.round(clickCount)}`;
}

function updateAutoClickers() {
    document.getElementById('autoClickers').textContent = `Auto Clickers: ${autoClickers}`;
}

function handleClick() {
    clickCount++;
    updateClickCount();
}

function buyAutoClicker() {
    if (clickCount >= autoClickerCost) {
        autoClickers++;
        clickCount -= autoClickerCost;
        autoClickerCost *= 1.5; // Increase the cost for the next auto clicker
        document.getElementById('buyAutoClicker').innerHTML = `Buy Auto Clicker (Cost: ${Math.round(autoClickerCost)} Slashes)`
        updateClickCount();
        updateAutoClickers();
    } else {
        alert("Not enough Slashes to buy an Auto Clicker!");
    }
}

function autoClickerClick() {
    clickCount += autoClickers;
    updateClickCount();
}

document.getElementById('clickButton').addEventListener('click', handleClick);
document.getElementById('buyAutoClicker').addEventListener('click', buyAutoClicker);

// Automatic clicking by auto clickers every second
setInterval(autoClickerClick, 1000);
let button =document.getElementById('clickButton')
button.addEventListener('click', function(){
    anime({
        targets: '#clickButton',
        scale: 0.8,
        duration: 80,
        easing: 'linear',
        }).finished.then(function(){
            anime({
                targets: '#clickButton',
                scale: 1,
                duration: 80,
                easing: 'linear',
                })
        })
        
});