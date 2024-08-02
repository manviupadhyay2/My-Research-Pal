import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import React, { useEffect, useState } from 'react';
import { RocketLaunchIcon, BookOpenIcon, PencilIcon, KeyIcon, GlobeAltIcon, EyeIcon, ShareIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: "Personalized Paper Recommendations",
    description: "Uses machine learning algorithms to recommend research papers based on the user’s research interests, past reading behavior, and current projects.",
    icon: <RocketLaunchIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Automated Literature Reviews",
    description: "Automatically generates summaries of relevant research papers, highlighting key findings, methodologies, and implications.",
    icon: <BookOpenIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "AI-Powered Text Editing and Writing Assistance",
    description: "An intelligent text editor that helps users write and refine their papers with grammar checks and style improvements.",
    icon: <PencilIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Reference Management Integration",
    description: "Integrates with popular reference management tools like Zotero and Mendeley, making it easy to organize and format citations and references.",
    icon: <KeyIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Cross-Language Research Capabilities",
    description: "Supports research across multiple languages, allowing users to access and integrate non-English literature into their work.",
    icon: <GlobeAltIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Topic Exploration and Visualization",
    description: "Provides tools for visualizing research topics, trends, and relationships between different studies.",
    icon: <EyeIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Collaboration and Sharing",
    description: "Features for sharing papers, notes, and annotations with collaborators. Includes options for collaborative writing and editing.",
    icon: <ShareIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Ethical and Responsible Research",
    description: "Offers resources and guidelines on ethical research practices, including guidance on plagiarism, data privacy, and research integrity.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "User-Friendly Interface and Customization",
    description: "A user-friendly interface with customization options for the look and feel of the platform.",
    icon: <UserIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Security and Data Privacy",
    description: "Ensures that user data and research are securely stored and handled with strict data privacy protocols.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-primary" />
  }
];

function Features() {
  const [isVisible, setIsVisible] = useState(Array(features.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const boxes = document.querySelectorAll('.feature-box');
    boxes.forEach((box) => observer.observe(box));

    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <Header />
      <main className="relative p-6 max-w-4xl mx-auto my-16">
        <h1 className="text-4xl font-bold mb-12 text-primary text-center">Our Features</h1>
        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full" style={{ transition: 'background-color 0.5s' }}></div>
          {/* Feature Boxes */}
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-box relative flex items-start mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-transform duration-500 ${isVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
            >
              <div className="flex-shrink-0 w-full md:w-2/3 p-6 bg-white border-2 border-primary rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{feature.icon}</div>
                  <h2 className="text-2xl font-semibold text-primary">{feature.title}</h2>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
              {index < features.length - 1 && (
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-primary animate-pulse"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Features;



