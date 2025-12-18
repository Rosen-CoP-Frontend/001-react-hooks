import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const url = new URL(request.url);
    const search = url.searchParams.get("search")?.toLowerCase() || "";

    const recordings = [
        {
            id: "1",
            title: "Frontend Community Kickoff",
            url: "https://example.com/frontend-kickoff"
        },
        {
            id: "2",
            title: "Advanced React Patterns",
            url: "https://example.com/advanced-react"
        },
        {
            id: "3",
            title: "TypeScript for Large Projects",
            url: "https://example.com/typescript-large"
        },
        {
            id: "4",
            title: "State Management in Modern Apps",
            url: "https://example.com/state-management"
        },
        {
            id: "5",
            title: "Building APIs with Node.js",
            url: "https://example.com/nodejs-apis"
        },
        {
            id: "6",
            title: "Testing Strategies with Jest",
            url: "https://example.com/testing-jest"
        },
        {
            id: "7",
            title: "Next.js Performance Optimization",
            url: "https://example.com/nextjs-performance"
        },
        {
            id: "8",
            title: "UI/UX Best Practices",
            url: "https://example.com/ui-ux-best"
        }
    ];

    const filtered = search
        ? recordings.filter(r =>
            r.id.toLowerCase().includes(search) ||
            r.title.toLowerCase().includes(search) ||
            r.url.toLowerCase().includes(search)
        )
        : recordings;

    return NextResponse.json(filtered);
}