import React, { useState } from 'react';
import './App.css';
import { quizData } from './quizData';

function App() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', padding: 40, minWidth: 320, textAlign: 'center' }}>
        {!answer ? (
          <>
            <h1 style={{ color: '#764ba2', marginBottom: 32 }}>{quizData.question}</h1>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
              {quizData.answers.map((a) => (
                <button
                  key={a.label}
                  onClick={() => setAnswer(a.response)}
                  style={{
                    padding: '12px 32px',
                    fontSize: 18,
                    borderRadius: 8,
                    border: 'none',
                    background: '#667eea',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    fontWeight: 600,
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#764ba2')}
                  onMouseOut={e => (e.currentTarget.style.background = '#667eea')}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 style={{ color: '#667eea', marginBottom: 24 }}>{answer}</h2>
            <button
              onClick={() => setAnswer(null)}
              style={{
                padding: '8px 24px',
                fontSize: 16,
                borderRadius: 8,
                border: 'none',
                background: '#764ba2',
                color: 'white',
                cursor: 'pointer',
                marginTop: 16,
                fontWeight: 500,
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#667eea')}
              onMouseOut={e => (e.currentTarget.style.background = '#764ba2')}
            >
              Rejouer
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
