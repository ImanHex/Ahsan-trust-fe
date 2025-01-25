import { faqList } from "lib/data";
import React from "react";
import { LuMessagesSquare } from "react-icons/lu";

const QASection: React.FC = () => {
  return (
    <div className="mt-12 px-20">
      <span className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-6">
        <LuMessagesSquare size={40} />
        Frequently Asked Questions
      </span>

      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QASection;
