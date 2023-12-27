const BASE_URL = 'http://localhost/ashion_ci';

export const limitedOffer = async () => {
    try {
        const response = await fetch(`${BASE_URL}/limited_offer.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching limited offers data: ${error.message}`);
    }
};