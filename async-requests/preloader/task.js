document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    
    function hideLoader() {
        loader.classList.remove('loader_active');
    }
    
    function displayCurrencies(data) {
        itemsContainer.innerHTML = '';
        
        const valutes = data.response.Valute;
        
        for (const currencyCode in valutes) {
            if (valutes.hasOwnProperty(currencyCode)) {
                const currency = valutes[currencyCode];
                
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                
                const codeElement = document.createElement('div');
                codeElement.className = 'item__code';
                codeElement.textContent = currency.CharCode;
                
                const valueElement = document.createElement('div');
                valueElement.className = 'item__value';
                valueElement.textContent = currency.Value.toFixed(4);
                
                const currencyElement = document.createElement('div');
                currencyElement.className = 'item__currency';
                currencyElement.textContent = 'руб.';
                
                itemElement.appendChild(codeElement);
                itemElement.appendChild(valueElement);
                itemElement.appendChild(currencyElement);
                
                itemsContainer.appendChild(itemElement);
            }
        }
    }
    function handleError(error) {
        console.error('Ошибка при загрузке данных:', error);
        hideLoader();
        itemsContainer.innerHTML = '<div class="error">Не удалось загрузить данные о валютах</div>';
    }
    
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            hideLoader();
            displayCurrencies(data);
        })
        .catch(error => {
            handleError(error);
        });
});