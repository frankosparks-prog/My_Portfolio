import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({
  isOpen,
  onClose,
  searchTerm,
  onSearchChange,
  results,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigate = (item) => {
    // You can detect the type based on unique fields or use a backend-provided `type` field if available
    if (item.content && item.author) {
      navigate(`/blog`);
    } else if (item.skills || item.qualifications) {
      navigate(`/profiles`);
    } else if (item.venue || item.speaker) {
      navigate(`/events`);
    } else if (item.type || item.location) {
      navigate(`/opportunities`);
    } else {
      console.warn("Unknown item type", item);
    }

    onClose(); // close modal after navigation
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-32 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-green-800">
            Search the Connect
          </h2>
          <button onClick={onClose}>
            <X size={22} className="text-gray-700 hover:text-red-600" />
          </button>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Type something..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          autoFocus
        />
        {results.length > 0 ? (
          <div className="mt-4 space-y-2 max-h-60 overflow-y-auto text-sm">
            {results.map((item, i) => (
              <div
                key={i}
                onClick={() => handleNavigate(item)}
                className="p-2 border border-gray-200 rounded hover:bg-green-50 cursor-pointer"
              >
                <p className="font-medium text-green-800">
                  {item.title || item.name}
                </p>
                {item.category && (
                  <p className="text-gray-500 text-xs">
                    Category: {item.category}
                  </p>
                )}
                {item.location && (
                  <p className="text-gray-500 text-xs">
                    Location: {item.location}
                  </p>
                )}
                {item.description && (
                  <p className="text-gray-600 text-xs truncate">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          searchTerm && (
            <p className="text-center text-sm text-gray-500 mt-4">
              No results found.
            </p>
          )
        )}
        <p className="text-sm mt-2 text-gray-500">
          You can search blog posts, opportunities, programs...
        </p>
      </div>
    </div>
  );
};

export default SearchModal;
