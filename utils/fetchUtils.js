

async function fetchPredict(text, language) {
    const apiUrl = `https://moderation.logora.fr/predict?text=${encodeURIComponent(text)}&language=${encodeURIComponent(language)}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch prediction');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching prediction:', error);
        throw error;
    }
}

async function fetchScore(text, language) {
    const apiUrl = `https://moderation.logora.fr/score?text=${encodeURIComponent(text)}&language=${encodeURIComponent(language)}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
          
        });

        if (!response.ok) {
            throw new Error('Failed to fetch score');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching score:', error);
        throw error;
    }
}

module.exports = { fetchPredict, fetchScore };
