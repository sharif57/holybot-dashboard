import React, { useState } from "react";

const EditSubscription = () => {
  const [features, setFeatures] = useState(["View Members Directory"]);
  const [newFeature, setNewFeature] = useState("");

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFeatures((prevFeatures) => [...prevFeatures, newFeature]);
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (index) => {
    setFeatures((prevFeatures) => prevFeatures.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full mx-auto p-6 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Subscription</h1>
      <div className="space-y-6">
        {/* Package Name and Amount */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="package-name" className="text-sm font-medium mb-1">
              Package Name
            </label>
            <input
              id="package-name"
              type="text"
              placeholder="Basic"
              className="border rounded-md p-2 text-sm"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="package-amount" className="text-sm font-medium mb-1">
              Package Amount
            </label>
            <input
              id="package-amount"
              type="text"
              placeholder="$4.99"
              className="border rounded-md p-2 text-sm"
            />
          </div>
        </div>

        {/* Package Expiration */}
        <div className="flex flex-col w-1/2 ">
          <label
            htmlFor="package-expiration"
            className="text-sm font-medium mb-1"
          >
            Package Expiration
          </label>
          <input
            id="package-expiration"
            type="text"
            placeholder="1 month"
            className="border rounded-md p-2 text-sm"
          />
        </div>

        {/* Package Features */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Package Features</label>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={feature}
                readOnly
                className="border rounded-md p-2 text-sm flex-grow"
              />
              <button
                onClick={() => handleRemoveFeature(index)}
                className="text-red-500 font-bold"
                aria-label={`Remove feature: ${feature}`}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              placeholder="Add new feature"
              className="border rounded-md p-2 text-sm flex-grow"
            />
            <button
              onClick={handleAddFeature}
              className="bg-gray-200 rounded-md px-3 py-1 text-sm font-medium"
              aria-label="Add feature"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="w-1/4 mx-auto mt-8">
        <button className="bg-orange-500 text-white rounded-md px-4 py-2 font-medium w-full hover:bg-orange-600 transition">
          Update
        </button>
      </div>
    </div>
  );
};

export default EditSubscription;
