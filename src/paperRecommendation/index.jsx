import React from 'react';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';

const PaperRecommendationPanel = () => {
  return (
    <div>
      <Header />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="text-4xl font-extrabold">Paper Recommendation Panel</h1>
        <p className="mt-4 text-lg">Here you can upload your research papers and get recommendations.</p>
        {/* Add functionality for uploading papers and showing recommendations here */}
      </div>
      <Footer />
    </div>
  );
};

export default PaperRecommendationPanel;
