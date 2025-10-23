/**
 * FAQ item component that displays a question and collapsible answer
 * 
 * @param {Object} props - Component props
 * @param {string} props.question - The FAQ question
 * @param {string} props.answer - The FAQ answer
 * @param {boolean} props.isOpen - Whether the item is expanded
 * @param {Function} props.onToggle - Callback function when item is clicked
 * @returns {JSX.Element} FAQ item component
 */
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8">{question}</h3>
        <span className={`flex-shrink-0 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl">
            +
          </div>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

