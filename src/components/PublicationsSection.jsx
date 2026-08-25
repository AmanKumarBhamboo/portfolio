import { useState } from "react";
import { BookOpen, ExternalLink, UserCheck, ArrowLeft, ArrowRight, Award } from "lucide-react";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

const papers = [
  {
    id: 1,
    title: "Deep Learning-Based Approaches for Efficient Brain MRI Segmentation: A Comprehensive Analysis",
    publisher: "IEEE — Fourth International Conference on Smart Technologies, Communication and Robotics (STCR) 2025",
    sector: "Medical Imaging & Healthcare AI",
    doi: "10.1109/STCR62650.2025.11020327",
    link: "https://doi.org/10.1109/STCR62650.2025.11020327",
    role: "Lead Data Analyst & Machine Learning Researcher",
    skills: [
      "Heterogeneous Data Aggregation",
      "Comparative Statistical Analysis",
      "Benchmark Evaluation",
      "Multi-Source Data Normalization",
    ],
    contributions: [
      {
        heading: "Data Aggregation & Preprocessing",
        text: "Aggregated and normalized fragmented MRI datasets across multiple distinct hospital sources, solving data discrepancy and variance issues.",
      },
      {
        heading: "Exploratory Analytics & Benchmarking",
        text: "Conducted a comprehensive, rigorous comparative analysis, evaluating traditional deep learning architectures (U-Net, ResNet) alongside advanced Transformer-based models across multiple performance vectors.",
      },
      {
        heading: "Statistical Modeling",
        text: "Benchmarked the stability and precision of an optimized architecture (EVAC+) under strict resource constraints. Evaluated boundary precision metrics mathematically to ensure the model could securely minimize surface distance errors across adult and pediatric data cohorts.",
      },
    ],
  },
  {
    id: 2,
    title: "Trust-Refined U-Net Ensemble for Uncertainty-Aware Brain Tumor Segmentation",
    publisher: "TechRxiv (Open-access Preprint Platform)",
    sector: "Medical Imaging & Healthcare AI",
    doi: "10.36227/techrxiv.175492140.09803812/v1",
    link: "https://doi.org/10.36227/techrxiv.175492140.09803812/v1",
    role: "Lead Analytics Engineer & Core Architect (Statistical Inference & Pipeline)",
    skills: [
      "Advanced Statistical Inference",
      "Epistemic Uncertainty Quantification",
      "Ensemble Modeling",
      "Data-Driven Post-Processing",
      "Reliability Engineering",
    ],
    contributions: [
      {
        heading: "Problem Formulating & Analytics",
        text: "Targeted the standard 'black-box' issue of CNNs by framing the problem from an analyst's lens—how to convert unverified machine outputs into trustworthy, risk-calibrated data insights for critical decision-making.",
      },
      {
        heading: "Statistical Uncertainty Estimation",
        text: "Integrated Advanced Statistical Inference via Monte Carlo Dropout during the model inference phase. This allowed for the active mathematical calculation of epistemic uncertainty, isolating exactly where the model lacked confidence.",
      },
      {
        heading: "Data Pipeline Optimization",
        text: "Orchestrated a multi-model ensemble pipeline combining specialized spatial architectures.",
      },
    ],
  },
];

export const PublicationsSection = () => {
  const [activeId, setActiveId] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [listLeaving, setListLeaving] = useState(false);

  const openDetail = (id) => {
    const p = papers.find((x) => x.id === id);
    setDetailData(p);
    setListLeaving(true);
    setTimeout(() => {
      setActiveId(id);
      setDetailVisible(true);
      setListLeaving(false);
    }, 200);
  };

  const closeDetail = () => {
    setDetailVisible(false);
    setTimeout(() => {
      setActiveId(null);
      setDetailData(null);
    }, 200);
  };

  const goNext = (id) => {
    const p = papers.find((x) => x.id === id);
    setDetailData(p);
    setActiveId(id);
  };

  return (
    <section id="publications" className="h-screen py-20 px-4 relative flex flex-col items-center justify-center overflow-y-auto snap-start snap-always">
      <div className="container mx-auto max-w-5xl w-full">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-center">Research</span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal">Publications</h2>
        </Reveal>

        <div className="grid grid-cols-1">
          {/* List view */}
          <div
            className={`col-start-1 row-start-1 transition-all duration-200 ease-out ${
              listLeaving || activeId
                ? "opacity-0 scale-[0.98] pointer-events-none"
                : "opacity-100 scale-100"
            }`}
          >
            <Reveal className="mb-10 text-left max-w-xl mx-auto">
              <TerminalWindow title="aman@bhamboo — ~/publications">
                <p className="text-primary">
                  <span className="mr-2">$</span>ls ~/publications
                </p>
              </TerminalWindow>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {papers.map((paper, i) => (
                <Reveal
                  key={paper.id}
                  delay={i * 120}
                  className="panel card-hover overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 border border-primary/30 shrink-0">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs uppercase tracking-wider px-2 py-1 border border-border/60 text-muted-foreground">
                        {paper.sector}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="font-serif text-xl mb-2 leading-snug">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium text-foreground/80">
                          Publisher:{" "}
                        </span>
                        {paper.publisher}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground/80">
                          DOI:{" "}
                        </span>
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {paper.doi}
                          <ExternalLink className="h-3 w-3 inline" />
                        </a>
                      </p>
                      <div className="mt-auto flex items-center gap-3">
                        <button
                          onClick={() => openDetail(paper.id)}
                          className="btn-outline !px-5 !py-2.5"
                        >
                          <UserCheck className="h-4 w-4" />
                          My Contribution
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Detail view */}
          {detailData && (
            <div
              className={`col-start-1 row-start-1 transition-all duration-200 ease-out ${
                detailVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-[0.98] pointer-events-none"
              }`}
            >
              <DetailView
                paper={detailData}
                onBack={closeDetail}
                onNext={() => goNext(detailData.id === 1 ? 2 : 1)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const DetailView = ({ paper, onBack, onNext }) => (
  <div className="max-w-4xl mx-auto text-left">
    <TerminalWindow title={`aman@bhamboo — ~/publications/paper_${paper.id}.md`}>
      <div className="min-h-[35rem]">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 border border-primary/30 shrink-0">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider px-2 py-1 border border-border/60 text-muted-foreground">
              {paper.sector}
            </span>
            <span className="text-xs text-muted-foreground ml-3 font-mono">
              paper {paper.id}/{2}
            </span>
          </div>
        </div>

        <h3 className="font-serif text-2xl mb-4 leading-snug">
          {paper.title}
        </h3>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Award className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">Role: </span>
            {paper.role}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {paper.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs uppercase tracking-wider border border-border/60 text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
          <UserCheck className="h-5 w-5 text-primary" />
          Core Contribution
        </h4>

        <div className="space-y-5 mb-8">
          {paper.contributions.map((item, i) => (
            <div key={i}>
              <h5 className="text-sm font-semibold text-primary mb-1">
                {item.heading}
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/40">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Overview
          </button>

          <button
            onClick={onNext}
            className="btn-solid"
          >
            Next Paper
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </TerminalWindow>
  </div>
);
