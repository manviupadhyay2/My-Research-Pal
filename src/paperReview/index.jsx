import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import mammoth from 'mammoth';
import { getDocument } from 'pdfjs-dist';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { AIChatSession } from 'C:/Users/Manvi Upadhyay/Desktop/New folder/my-research-pal/services/AIModal.js';

function PaperReview() {
  const [text, setText] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      let extractedText = '';

      if (file.type === 'application/pdf') {
        const pdfData = await file.arrayBuffer();
        const pdf = await getDocument({ data: pdfData }).promise;
        const numPages = pdf.numPages;
        let textContent = '';

        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map(item => item.str).join(' ');
          textContent += pageText + '\n';
        }

        extractedText = textContent;
      } else if (file.type === 'image/png' || file.type === 'image/jpeg') {
        const { data: { text } } = await Tesseract.recognize(file, 'eng');
        extractedText = text;
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const { value } = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
        extractedText = value;
      }

      setText(extractedText);
    },
  });

  const handleGenerateReview = async () => {
    if (!text) return;

    setLoading(true);
    const prompt = `Generate a detailed review of the following research paper text:\n\n${text}`;

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const response = result.response;
      setReview(response.text());
    } catch (error) {
      console.error('Error generating review:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-10 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Upload and Extract Text from Your Document</h1>
          <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer hover:bg-gray-50 transition">
            <input {...getInputProps()} />
            <p className="text-gray-600 text-center">Drag 'n' drop some files here, or click to select files</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Extracted Text:</h3>
            <pre className="whitespace-pre-wrap bg-gray-200 p-4 rounded-lg">{text}</pre>
          </div>
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={handleGenerateReview}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? 'Generating Review...' : 'Generate Review'}
            </button>
          </div>
          {review && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Generated Review:</h3>
              <pre className="whitespace-pre-wrap bg-gray-200 p-4 rounded-lg">{review}</pre>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PaperReview;
