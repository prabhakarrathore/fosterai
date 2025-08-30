// Image URL utility to handle both local and production environments
const getImageBaseUrl = () => {
    // Use the same base URL as the API but without the /api suffix
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://fosterai-backend.onrender.com/api';
    return apiUrl.replace('/api', '');
};

export const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '';
    const baseUrl = getImageBaseUrl();
    // Remove leading slash if present to avoid double slashes
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${baseUrl}/${cleanPath}`;
};

export default { getImageUrl, getImageBaseUrl };
