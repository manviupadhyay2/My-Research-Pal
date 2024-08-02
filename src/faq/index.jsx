import React, { useState } from 'react';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import * as Collapsible from '@radix-ui/react-collapsible';

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [doubt, setDoubt] = useState('');

  const faqs = [
    {
      question: 'Is "My Research Pal" free to use?',
      answer: 'The platform offers both free and premium plans, with the premium plan providing additional features.'
    },
    {
      question: 'Who can benefit from using "My Research Pal"?',
      answer: 'It\'s ideal for Academic Researchers, Graduate and Postgraduate students, Industry Researchers and R&D teams, Educators and Professors, Policy Makers, Libraries and Information Services, and anyone else who is keen to foray into research.'
    },
    {
      question: 'Does "My Research Pal" cover all research fields?',
      answer: 'Even though currently centric to technology, this platform is continuously expanding its database.'
    },
    {
      question: 'What makes "My Research Pal" different from other research tools?',
      answer: 'Our focus on context understanding and personalized recommendations sets us apart.'
    },
    {
      question: 'How do I get started with "My Research Pal"?',
      answer: 'Simply sign up on our website, create a profile, and start exploring personalized recommendations as per convenience.'
    },
  ];

  const handlePost = () => {
    // Handle posting the doubt (e.g., validation or API call)
    console.log('Doubt posted:', doubt);
    setDoubt('');
  };

  return (
    <div>
      <Header />

      <main className="p-6 max-w-4xl mx-auto my-16"> {/* Increased margin from the top */}
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <Collapsible.Root>
              <Collapsible.Trigger
                className="w-full bg-gray-100 p-4 rounded-lg shadow-md text-left flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-primary" />
                )}
              </Collapsible.Trigger>
              {openIndex === index && (
                <Collapsible.Content className="p-4 bg-white rounded-lg shadow-md mt-2">
                  <p className="text-lg text-gray-700">{faq.answer}</p>
                </Collapsible.Content>
              )}
            </Collapsible.Root>
          </div>
        ))}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Have a Doubt?</h2>
          <textarea
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            rows="4"
            placeholder="Write your doubt here..."
            className="w-full p-4 border rounded-lg mb-4"
          />
          <button
            onClick={handlePost}
            className="w-full py-3 px-5 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Post
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;
