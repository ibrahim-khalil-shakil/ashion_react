const BASE_URL = 'http://localhost/ashion_ci';

export const product = async () => {
    try {
        const response = await fetch(`${BASE_URL}/product.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching product data: ${error.message}`);
    }
}; 