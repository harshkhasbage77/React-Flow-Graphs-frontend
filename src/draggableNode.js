// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
      // event.dataTransfer.dropEffect = 'move';
    };
  
    return (
      <div
      className={`${type} cursor-grab text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-600 backdrop-filter backdrop-blur-lg bg-opacity-30`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{ 
        minWidth: '80px', 
        height: '60px',
        display: 'flex', 
        alignItems: 'center', 
        borderRadius: '8px',
        backgroundColor: '#1C2536',
        fontFamily: "Poppins, sans-serif",
        justifyContent: 'center', 
        flexDirection: 'column'
      }} 
      draggable
      >
        
        <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  