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

        // Filter keys that contain at least one of the query words
        const results = Object.keys(data).filter(key => {
            const keyLower = key.toLowerCase();
            return queryWords.some(word => keyLower.includes(word)); // Check if any word matches
        });

        // Print the matching results and their content
        results.forEach(key => {
            console.log(`Found match in: ${key}`);
            console.log(data[key].content); // Print the content associated with the key
        });

        // Optionally, return all matching content if needed
        return results.map(key => data[key].content).join('');
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return '';
    }
}
