'use client';

import { useEffect, useState } from "react";
import { getRecordings } from "../services/recordings";

export const Recordings = ({ filter }: { filter: string }) => {
    const [data, setData] = useState<{
        id: string;
        title: string;
        url: string;
    }[] | null>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getRecordings(filter);
            setData(response);
            setLoading(false);
        }
        fetchData();
    }, [filter]);

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