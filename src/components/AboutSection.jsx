import { BarChart, Search, Database } from "lucide-react";

export const AboutSection = () => {
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

                        <div className="pt-4">
                            <a
                                href="/Aman_Kumar_Bhamboo_Resume.pdf"
                                download
                                className="inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 h-full">
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
                    </div>

                </div>
            </div>
        </section>
    );
};
