// src/utils/convertFile.js
import { PDFDocument } from 'pdf-lib';
import { Document, Packer, Paragraph } from 'docx';

export const convertPdfToText = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const textContent = await pdfDoc.getTextContent();
  return textContent.items.map((item) => item.str).join(' ');
};

export const convertTextToDocx = async (text) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [new Paragraph(text)],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
};
