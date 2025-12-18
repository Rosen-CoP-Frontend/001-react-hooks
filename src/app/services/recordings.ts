export const getRecordings = async (search = ''): Promise<{
    id: string;
    title: string;
    url: string;
}[]> => {
    try {
        await (new Promise(resolve => setTimeout(resolve, 2000))); // Ensures fetchData is async
        const response = await fetch(`/api/recordings?search=${encodeURIComponent(search)}`);
        const data = await response.json();
        return data;
    } catch {
        return [];
    }
};