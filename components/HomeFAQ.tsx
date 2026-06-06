import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "How does Sleeka work?",
    answer: "Sleeka gives your business access to a dedicated creative team that works like an extension of your internal team. We handle strategy, design, video, and content execution through a structured monthly system so your marketing runs consistently without you managing freelancers or building an in-house team."
  },
  {
    question: "What is included in the monthly subscription?",
    answer: "Every plan includes a dedicated Project Manager, monthly content strategy and execution, brand graphics and marketing visuals, short-form video editing, motion graphics, and a monthly performance report. The Authority plan adds expanded capacity, faster turnaround, and lead generation support."
  },
  {
    question: "How does the content system work?",
    answer: "We use a content operating system that you also have access to. All monthly content is logged so you can see what is in progress, under review, completed, or posted. We track performance metrics like leads generated, engagement rates, and best-performing content. At the end of each month, you get a clear performance report with insights and next steps."
  },
  {
    question: "How long before I start seeing results?",
    answer: "Most clients notice improvements in clarity, consistency, and engagement within the first 30 to 60 days. Stronger outcomes like leads and conversions build over time as the system compounds. We recommend staying at least two months to properly evaluate results."
  },
];

interface HomeFAQProps {
  onNavigateToFAQ?: () => void;
}

export const HomeFAQ: React.FC<HomeFAQProps> = ({ onNavigateToFAQ }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#5c0386] mb-3">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Frequently asked<br />questions
          </h2>
          <p className="text-gray-500 text-lg">
            Your most important questions before committing: answered here.
          </p>
        </div>

        {/* Accordion items */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={index} className="py-1">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                >
                  <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-[#5c0386]' : 'text-gray-900 group-hover:text-[#5c0386]'}`}>
                    {faq.question}
                  </span>

                  {/* Animated + / × icon */}
                  <div
                    className="shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isOpen ? '#5c0386' : '#d1d5db',
                      backgroundColor: isOpen ? '#5c0386' : 'transparent',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <line x1="6" y1="0" x2="6" y2="12" stroke={isOpen ? 'white' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" />
                      <line x1="0" y1="6" x2="12" y2="6" stroke={isOpen ? 'white' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                {/* Answer: smooth expand */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
                  }}
                >
                  <p className="text-gray-600 text-base leading-relaxed pb-6 pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to full FAQ */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <button
            onClick={onNavigateToFAQ}
            className="inline-flex items-center gap-2 text-[#5c0386] font-semibold text-base hover:gap-3 transition-all duration-200 group"
          >
            See all questions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
