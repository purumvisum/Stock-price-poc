const apiKey = 'ZQAZ1XZQYQ1EYEWV';
const stocks = [
    { symbol: 'INGA.AS', name: 'ING (AEX)' }, 
    { symbol: 'ING', name: 'ING (NYSE)' }
];
const interval = 15 * 60 * 1000; // 15 minutes in milliseconds

async function fetchStockData(stock) {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=${apiKey}`);
    const data = await response.json();
    if (data.Information) {
        const notification = document.getElementById('notification');
        notification.innerText = data.Information;
    }
    return { ...data['Global Quote'], name: stock.name };
}

function updateStockUI(stockData) {
    const container = document.getElementById('stock-container');
    container.innerHTML = '';

    stockData.forEach(stock => {
        const { '01. symbol': symbol, '05. price': price, '09. change': change, name } = stock;
        const changeClass = parseFloat(change) >= 0 ? 'up' : 'down';

        const stockDiv = document.createElement('div');
        stockDiv.className = 'stock-item';
        stockDiv.innerHTML = `
            <h2 class="stock-label">${name}</h2> <strong class="stock-value"> ${price} </strong> <span class="stock-change ${changeClass}">${change}</span>
        `;

        container.appendChild(stockDiv);
    });
}

async function updateStockPrices() {
    const stockPromises = stocks.map(fetchStockData);
    const stockData = await Promise.all(stockPromises);
    updateStockUI(stockData);
}

updateStockPrices();
// TO set an interval in 15 min
// setInterval(updateStockPrices, interval);
