'use client';

export const Recordings = () => {
    const loading = false;
    const data = [
        { id: 1, title: "Recording 1", url: "https://example.com/recording1" },
        { id: 2, title: "Recording 2", url: "https://example.com/recording2" },
        { id: 3, title: "Recording 3", url: "https://example.com/recording3" },
    ];

    if (loading) {
        return <div>Loading recordings...</div>;
    }

    if (!data || data.length === 0) {
        return <div>No recordings available.</div>;
    }

    return (
        data.map((recording) => (
            <div key={recording.id} className="w-full flex justify-between p-4 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{recording.title}</h3>
                <a
                    href={recording.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Watch Recording
                </a>
            </div>
        ))
    );
};