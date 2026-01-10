import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { BarChart, Search, Database } from "lucide-react";

export const AboutSection = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAsk = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setResponse("");

        try {
            const res = await fetch("/api/ai/ask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: query }),
            });

            const data = await res.json();
            setResponse(data.reply || "Something went wrong. Please try again.");
        } catch (error) {
            console.error("Error asking AI:", error);
            setResponse("Failed to connect to AI. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-left">
                        <h3 className="text-2xl font-semibold">
                            Passionate Data Analyst and Researcher
                        </h3>

                        <p className="text-muted-foreground">
                            I’m a data analyst and researcher passionate about extracting insights, analyzing patterns,
                            and transforming complex data into clear, meaningful, and actionable knowledge
                        </p>

                        <p className="text-muted-foreground">
                            I’m constantly learning new tools and methods to stay at
                            the forefront of the ever-evolving data landscape. When I’m not analyzing,
                            I enjoy exploring new datasets and contributing to research projects.
                        </p>

                        {/* AI Search Section */}
                        {/* AI Search Section */}
                        <div className="pt-4">
                            <form onSubmit={handleAsk} className="flex gap-2">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-2 rounded-lg bg-secondary/30 border border-primary/20 focus:border-primary/50 focus:outline-none transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                                >
                                    {loading ? (
                                        <span className="text-sm font-medium whitespace-nowrap animate-pulse">
                                            Ai is thinking please wait...
                                        </span>
                                    ) : (
                                        <Search className="w-5 h-5" />
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 flex justify-start">
                                <a
                                    href="/Aman_Kumar_Bhamboo_Resume.pdf"
                                    download
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 h-full">
                        {response ? (
                            <div className="gradient-border p-8 card-hover h-full flex flex-col animate-fade-in relative">
                                <button
                                    onClick={() => setResponse("")}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                                    title="Close Answer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Search className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-lg">AI Answer</h4>
                                </div>
                                <div className="text-left text-muted-foreground leading-relaxed overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                                    <ReactMarkdown
                                        components={{
                                            h3: ({ ...props }) => <h3 className="text-xl font-semibold text-primary mt-4 mb-2" {...props} />,
                                            ul: ({ ...props }) => <ul className="list-disc pl-5 space-y-1 mb-4" {...props} />,
                                            ol: ({ ...props }) => <ol className="list-decimal pl-5 space-y-1 mb-4" {...props} />,
                                            li: ({ ...props }) => <li className="pl-1" {...props} />,
                                            strong: ({ ...props }) => <strong className="text-foreground font-medium" {...props} />,
                                            p: ({ ...props }) => <p className="mb-4 last:mb-0" {...props} />,
                                            a: ({ ...props }) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                        }}
                                    >
                                        {response}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <BarChart className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">Data Analysis</h4>
                                            <p className="text-muted-foreground">
                                                Analyzing structured and unstructured data to uncover trends,
                                                patterns, and actionable insights.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Search className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">Research & Insights</h4>
                                            <p className="text-muted-foreground">
                                                Conducting in-depth research, validating findings, and transforming
                                                complex information into meaningful conclusions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Database className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">Data Modeling & Visualization</h4>
                                            <p className="text-muted-foreground">
                                                Building data models and visualizations to communicate insights
                                                clearly and support data-driven decisions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};
