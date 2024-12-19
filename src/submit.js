import { useStore } from './store';
import { useState } from 'react';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const [modalVisible, setModalVisible] = useState(false);
  const [pipelineInfo, setPipelineInfo] = useState(null);

  const handleSubmit = async () => {
    try {
      const payload = { nodes, edges };

      // Send data to the backend
      const response = await fetch('https://no-code-ai-automations-platform-backend.onrender.com/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from backend');
      }

      const result = await response.json();
      setPipelineInfo(result);
      setModalVisible(true); // Show the modal with results
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('An error occurred while submitting the pipeline. Please try again.');
    }
  };

  const closeModal = () => setModalVisible(false);

  const buttonStyle = {
    background: 'linear-gradient(145deg, rgb(0 205 154), rgb(13 118 141))',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    weight: '600',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 1s ease',
    outline: 'none'
};

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        style={buttonStyle}
      >
        Submit
      </button>

      {/* Styled Modal */}
      {modalVisible && pipelineInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Pipeline Details</h2>
            <p className="text-gray-700">
              <strong>Number of Nodes:</strong> {pipelineInfo.num_nodes}
            </p>
            <p className="text-gray-700">
              <strong>Number of Edges:</strong> {pipelineInfo.num_edges}
            </p>
            <p className="text-gray-700">
              <strong>Is Directed Acyclic Graph (DAG):</strong>{' '}
              {pipelineInfo.is_dag ? 'Yes' : 'No'}
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
