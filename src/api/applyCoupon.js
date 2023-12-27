const BASE_URL = 'http://localhost/ashion_ci';

export const applyCoupon = async (code) => {
    try {
        const response = await fetch(`${BASE_URL}/apply_coupon.php?code=${code}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok.`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching product data: ${error.message}`);
    }
}; 