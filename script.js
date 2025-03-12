async function searchHTML(query) {
    try {
        const response = await fetch('main.json');
        const data = await response.json();
        
        const queryWords = query.toLowerCase().split(/\s+/);
        
        const results = data.filter(item => {
            if (item.html) {
                const content = item.html.toLowerCase();
                return queryWords.every(word => content.includes(word));
            }
            return false;
        });
        
        return results.map(item => item.html).join('');
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return '';
    }
}