import React, { useState } from 'react';
import { AIChatSession } from 'C:/Users/Manvi Upadhyay/Desktop/New folder/my-research-pal/services/AIModal.js';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';

function PaperRecommendationPanel() {
  const [abstract, setAbstract] = useState('');
  const [paperCount, setPaperCount] = useState(5);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const prompt = `Give me ${paperCount} research paper response${paperCount > 1 ? 's' : ''} in an array related to the following abstract for leaf disease detection with "paperTitle","paperGenre","authorName","journalName","journalLink" give me actual link that are available as fields and give me proper ${paperCount} response suggestion${paperCount > 1 ? 's' : ''}. Don't give any other text`;

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const response = result.response;
      const parsedResponse = JSON.parse(response.text().replace('```json', '').replace('```',''));
      setRecommendations(parsedResponse);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Paper Recommendation Panel</h1>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="abstract" className="block mb-2 font-semibold">Abstract:</label>
              <textarea
                id="abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                placeholder="Enter your abstract here..."
                rows={5}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="paperCount" className="block mb-2 font-semibold">Number of Research Papers:</label>
              <select
                id="paperCount"
                value={paperCount}
                onChange={(e) => setPaperCount(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isLoading ? 'Loading...' : 'Get Recommendations'}
            </button>
          </form>

          {recommendations.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Paper Title</th>
                    <th className="border border-gray-300 p-2">Genre</th>
                    <th className="border border-gray-300 p-2">Author Name</th>
                    <th className="border border-gray-300 p-2">Journal Name</th>
                    <th className="border border-gray-300 p-2">Journal Link</th>
                  </tr>
                </thead>
                <tbody>
                  {recommendations.map((paper, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">{paper.paperTitle}</td>
                      <td className="border border-gray-300 p-2">{paper.paperGenre}</td>
                      <td className="border border-gray-300 p-2">{paper.authorName}</td>
                      <td className="border border-gray-300 p-2">{paper.journalName}</td>
                      <td className="border border-gray-300 p-2">
                        {paper.journalLink !== 'not available' ? (
                          <a href={paper.journalLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Link
                          </a>
                        ) : (
                          'Not available'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default PaperRecommendationPanel;