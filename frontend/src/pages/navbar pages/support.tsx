import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen mt-10 bg-[#121212] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Support</h1>
        <p className="text-lg text-gray-300 mb-6">
          Need help? We're here for you. Get in touch or check out the FAQs below.
        </p>

        <div className="space-y-4">
          <div className="bg-[#1f1f1f] p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">📩 Contact Us</h2>
            <p className="text-gray-400">Email us at <a href="mailto:support@stockify.com" className="text-blue-400 hover:underline">support@stockify.com</a></p>
          </div>

          <div className="bg-[#1f1f1f] p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">❓ FAQs</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>How do I add stocks to my portfolio?</li>
              <li>How often is stock data updated?</li>
              <li>Is there a mobile version?</li>
              <li>How can I reset my password?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
