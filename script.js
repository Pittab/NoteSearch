async function searchHTML(query) {
    try {
        const response = await fetch('main.json');
        const data = await response.json();
        
        console.log(data); // Log the data to inspect its structure

        // Check if data is an object
        if (typeof data !== 'object') {
            throw new Error('Data is not an object');
        }

        const queryWords = query.toLowerCase().split(/\s+/);

        // Filter keys that contain all query words
        const results = Object.keys(data).filter(key => {
            const keyLower = key.toLowerCase();
            return queryWords.every(word => keyLower.includes(word));
        });

        // Return the matching content fields
        return results.map(key => data[key].content).join('');
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return '';
    }
}
