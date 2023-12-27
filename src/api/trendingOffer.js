const BASE_URL = 'http://localhost/ashion_ci';

export const trendingOffer = async () => {
    try {
        const response = await fetch(`${BASE_URL}/trending_offer.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching trending offers data: ${error.message}`);
    }
};