import React, { useEffect, useState } from "react";
import "./styles.css";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
  return (
    <Document
      file={pdf}
      options={{ workerSrc: "../pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          // scale={width > 760 ? 1.2 : 0.4}
          key={`page_${index + 1}`}
          pageNumber={index + 1}
        />
      ))}
    </Document>
  );
}
