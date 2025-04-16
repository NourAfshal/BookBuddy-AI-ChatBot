import React from 'react';
import './OutputSection.css';

export default function OutputSection({ output, handleSubmit, isLoading }) {
  return (
    <div className="output-section">
      <button className="generate-btn" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? '⏳ جاري الإرسال...' : 'إرسال السؤال'}
      </button>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
}
