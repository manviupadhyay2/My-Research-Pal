import Footer from '@/components/custom/Footer';
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AIChatSession } from 'C:/Users/Manvi Upadhyay/Desktop/New folder/my-research-pal/services/AIModal.js';

const EditPaper = () => {
  const [content, setContent] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const previewRef = useRef(null);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['formula'],
    ],
  };

  const getAISuggestions = async () => {
    setIsLoading(true);
    try {
      const prompt = `I am writing a journal or research paper. Please proofread the following text for grammatical errors and provide suggestions for improvement. Here's the text:

${content}

Please provide your response in the following format:
1. Grammatical Corrections:
[List the grammatical errors and their corrections here]

2. Suggestions for Improvement:
[Provide suggestions to enhance the writing here]`;

      const result = await AIChatSession.sendMessage(prompt);
      const response = await result.response;
      setAiSuggestions(response.text());
    } catch (error) {
      console.error('Error getting AI suggestions:', error);
      setAiSuggestions('An error occurred while getting AI suggestions.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(previewRef.current.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const handleShare = () => {
    // Implement share functionality (e.g., copy link to clipboard)
    alert('Share functionality to be implemented');
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.docx';
    link.click();
  };

  return (
    <>
      <style>
        {`
          .edit-paper-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f9f9f9;
          }
          .editor-preview-container {
            display: flex;
            flex-grow: 1;
            margin: 20px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: white;
          }
          .editor-container, .preview-container {
            width: 50%;
            padding: 20px;
            display: flex;
            flex-direction: column;
          }
          .preview-container {
            border-left: 1px solid #ddd;
          }
          .preview .ql-snow {
            border: none;
          }
          .preview .ql-editor {
            padding: 20px;
            min-height: 500px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f7f7f7;
            margin-bottom: 30px; /* Increased margin to separate from AI suggestions */
          }
          .footer-container {
            margin-top: auto;
          }
          .button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .button:hover {
            background-color: #0056b3;
          }
          .ai-suggestions {
            margin-top: 20px;
            padding: 15px; /* Added padding to increase spacing inside the box */
            white-space: pre-wrap;
            max-height: 200px;
            overflow-y: auto;
            background-color: #f1f1f1;
            border-radius: 8px;
            border: 1px solid #ddd;
          }
          .editor-header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .ai-suggestions-button {
            margin-left: auto;
          }
          .action-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
        `}
      </style>
      <div className="edit-paper-container">
        <div className="editor-preview-container">
          <div className="editor-container">
            <div className="editor-header-container">
              <h2 className="text-xl font-bold">Edit Research Paper</h2>
              <button 
                className="button ai-suggestions-button my-2"
                onClick={getAISuggestions}
                disabled={isLoading}
              >
                {isLoading ? 'Getting AI Suggestions...' : 'Get AI Suggestions'}
              </button>
            </div>
            <ReactQuill 
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              className="mb-20"
                      />
                      {aiSuggestions && (
              <div className="ai-suggestions">
                <h3 className="text-lg font-semibold">AI Suggestions:</h3>
                <pre>{aiSuggestions}</pre>
              </div>
            )}
          </div>
          
          <div className="preview-container">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="preview ql-snow">
              <div 
                ref={previewRef}
                className="ql-editor" 
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div className="action-buttons">
              <button className="button" onClick={handlePrint}>Print</button>
              <button className="button" onClick={handleShare}>Share</button>
              <button className="button" onClick={handleDownload}>Download</button>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EditPaper;

