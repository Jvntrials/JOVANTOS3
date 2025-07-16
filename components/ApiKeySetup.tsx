
import React, { useState } from 'react';
import { KeyIcon } from './icons/KeyIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface ApiKeySetupProps {
  onKeySubmit: (key: string) => void;
}

export const ApiKeySetup: React.FC<ApiKeySetupProps> = ({ onKeySubmit }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onKeySubmit(key.trim());
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 text-center">
        <SparklesIcon className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome!</h1>
        <p className="text-slate-600 mb-6">Let's set up your Gemini API access.</p>

        <div className="text-left bg-slate-50 p-6 rounded-lg border border-slate-200">
            <p className="text-slate-700 font-medium mb-4">
              This app uses the Google Gemini API to analyze your content. To protect your data, the analysis runs entirely in your browser, using an API key from your own Google Account.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-600">
                <li>
                    Click the button below to get your API key from Google AI Studio.
                    <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full mt-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                        Get Google Gemini API Key
                    </a>
                </li>
                <li>Once you have your key, paste it in the field below and save.</li>
            </ol>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
            <div className="relative">
                <KeyIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                    type="password"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Paste your API key here"
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    aria-label="Gemini API Key"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={!key.trim()}
                className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:bg-indigo-300 disabled:cursor-not-allowed"
            >
                Save & Start Analyzing
            </button>
        </form>
         <p className="text-xs text-slate-400 mt-6">
            Your key is stored securely in your browser's local storage and is never sent to a server.
        </p>
      </div>
    </div>
  );
};
