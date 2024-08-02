import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import { AtomIcon, Edit, Share2, Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: 'manviupadhyay2',
    review: 'Hi! Yesterday, I read about the exciting, budding topic of Explainable AI. I was thinking along the lines of an intersection of VQA and XAI. It\'s fascinating how VQA systems answer questions about images while XAI techniques enhance transparency and interpretability. I\'m interested in exploring how these can be combined for more understandable AI systems. Anyone intrigued by this topic, let\'s discuss it on my MRP profile!',
    stars: 4,
    highlight: 'Amazing'
  },
  {
    name: 'hrishabhthakur14',
    review: 'Hello buds, I recently dived into nutritional strategies that enhance muscle growth and strength training. It\'s fascinating how protein timing, micronutrient intake, and overall diet composition can significantly impact muscle recovery and development. I\'m eager to explore how specific dietary adjustments can optimize training results. I am interested in conducting legitimate research. If you\'re into muscle building and nutrition, connect with me on my mrp profile and teach people how to live life king size, grow muscle Ronnie size 💪',
    stars: 5,
    highlight: 'Excellent'
  },
  {
    name: 'piyushlahori2004',
    review: 'I’m maybe an introvert for most of the day, but when someone starts discussing cricket, I am invested and so all in- the loudest and most extroverted I ever am. I’m diving into how cutting-edge technologies are reshaping cricket, from AI-driven analytics to wearable tech that monitors player performance like WHOOP. If you’re excited about the fusion of technology and cricket research, join me in incorporating my hobby in some real tech work! Hit me up on my My Research Pal profile 😊',
    stars: 4,
    highlight: 'Fantastic'
  },
  {
    name: 'bhavyatiwarii',
    review: 'As a young individual with a growing interest in research, I find myself a bit lost on where to begin. I’m reaching out here in hopes of getting some guidance and support from this knowledgeable community. If anyone can offer advice on how to start, whether it’s about choosing a research field, finding resources, or understanding research methods, I would greatly appreciate your help. Your insights and recommendations could make a big difference as I embark on this exciting journey. PS: I am new to MRP ;P',
    stars: 3,
    highlight: 'Helpful'
  }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  return (
    <div>
      <Header />
      <div>
        {/* Existing Sections */}
        <section className="z-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span>
              <span className="text-sm font-medium">Try Writing Your Own Research Paper</span>
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              This is where you <span className='text-primary'>re- search your research</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Research Paper with Our AI-Powered Builder</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://youtu.be/Q5LM985yUmQ" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </a>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">Find research paper for any topic</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <AtomIcon className='h-8 w-8 text-primary' />
              <h2 className="mt-4 text-xl font-bold text-gray-900">Write prompt for your form</h2>
              <p className="mt-1 text-sm text-gray-600">Create a detailed prompt to guide the form creation process. This step ensures that your form captures all the necessary information effectively.</p>
            </a>
            <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <Edit className='h-8 w-8 text-primary' />
              <h2 className="mt-4 text-xl font-bold text-gray-900">Edit Your form</h2>
              <p className="mt-1 text-sm text-gray-600">Refine and customize your form to meet specific needs. Make adjustments to ensure accuracy and relevance.</p>
            </a>
            <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="#">
              <Share2 className='h-8 w-8 text-primary' />
              <h2 className="mt-4 text-xl font-bold text-gray-900">Share your form</h2>
              <p className="mt-1 text-sm text-gray-600">Distribute your form to your audience. Use various sharing options to maximize reach and gather responses efficiently.</p>
            </a>
          </div>
        </section>

        {/* New Button Section */}
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link to="/paperRecommendation" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Go to Paper Recommendation
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </section>
        {/* New Button Section */}
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link to="/paperReview" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Review Your Paper
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </section>

        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl mb-8">What Our Users Are Saying</h2>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-6 border rounded-lg bg-white shadow-lg space-y-4">
                <div className="flex items-center mb-2">
                  <span className="font-semibold text-lg">{review.name}</span>
                  <div className="ml-auto flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < review.stars ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="text-lg font-medium text-gray-600 mb-2">{review.highlight}</div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            ))}
          </Slider>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
