import React, { useEffect, useState } from 'react';
import AddResearchPaper from './components/AddResearchPaper';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from 'C:/Users/Manvi Upadhyay/Desktop/New folder/my-research-pal/services/GlobalApi.js';
import ResearchPaperCardItem from './components/ResearchPaperCardItem';
import Footer from '@/components/custom/Footer';

function Dashboard() {
  const { user } = useUser();
  const [researchPapersList, setResearchPapersList] = useState([]);

  useEffect(() => {
    if (user) {
      GetResearchPapersList();
    }
  }, [user]);

  const GetResearchPapersList = () => {
    GlobalApi.GetUserResearchPapers(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log('Research Papers List Response:', resp);
        setResearchPapersList(resp.data.data);
      })
      .catch(error => {
        console.error('Error fetching research papers:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <div className='max-w-6xl mx-auto p-6'>
          <h1 className='text-3xl font-bold mb-6 text-center'>My Research Papers</h1>
          <p className='text-lg mb-6 text-center'>Start creating and managing your research papers.</p>
          <div className='flex justify-center mb-8'>
            <AddResearchPaper refreshData={GetResearchPapersList} />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {researchPapersList.length > 0 ? (
              researchPapersList.map(paper => (
                <ResearchPaperCardItem key={paper.paperId} paper={paper} refreshData={GetResearchPapersList} />
              ))
            ) : (
              <div className='col-span-full text-center text-gray-500'>No research papers found.</div>
            )}
          </div>
        </div>
      </div>
      <Footer className='mt-auto' />
    </div>
  );
}

export default Dashboard;
