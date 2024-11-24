// submit.js
import {useStore} from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
      }));

    const handleSubmit = async () => {
        try {
          // Prepare the request payload
          const payload = { nodes, edges };

          console.log('Payload:', payload);
    
          // Send data to the backend
          const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          console.log(response);

          if (!response.ok) {
            throw new Error('Failed to fetch response from backend');
          }
    
          const result = await response.json();
    
          // Display an alert with the result
          const { num_nodes, num_edges, is_dag } = result;
          alert(
            `Pipeline Details:\n- Number of Nodes: ${num_nodes}\n- Number of Edges: ${num_edges}\n- Is Directed Acyclic Graph: ${is_dag}`
          );
        } catch (error) {
          console.error('Error submitting pipeline:', error);
          alert('An error occurred while submitting the pipeline. Please try again.');
        }
      };

    return (
        <div className="" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
            <button 
                onClick={handleSubmit}
                className="" type="submit" style={buttonStyle}
            >
                Submit
            </button>
        </div>
    );
}

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
