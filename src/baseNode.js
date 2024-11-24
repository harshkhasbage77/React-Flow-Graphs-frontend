// baseNode.js

import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, label, handles = [], fields = [], styles = {} }) => {
  return (
    <div 
      className='flex flex-col'
      style={{ padding: '10px', border: '1px solid black', borderRadius: '8px', width: 'auto', ...styles }}>
      {/* Node Label */}
      <div>
        <strong>{label}</strong>
      </div>

      {/* Dynamic Fields */}
      <div>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            <label>
              {field.label}:
              {(() => {
                switch (field.type) {
                  case 'select':
                    return (
                      <select
                      value={data[field.name]}
                      onChange={(e) => field.onChange(id, field.name, e.target.value)}
                      className='bg-white border border-gray-300 rounded-md m-2 p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                      >
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option} className='p-2'>
                        {option}
                        </option>
                      ))}
                      </select>
                    );
                  case 'file':
                    return (
                      <input
                        type="file"
                        accept={field.accept}
                        onChange={(e) => field.onChange(id, field.name, e.target.files[0])}
                      />
                    );
                  case 'button':
                    return (
                      <button
                        onClick={field.onClick}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full'
                      >
                        {field.buttonText}
                      </button>
                    );
                  case 'textarea':
                    return (
                      <textarea
                        value={field.text}
                        style={{ width: field.style.width, height: field.style.height }}
                        onChange={(e) => field.onChange(id, field.name, e.target.value)}
                        className='bg-white border border-gray-300 rounded-md m-2 p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                      />
                    );
                  case 'text':
                  default:
                    return (
                      <input
                        type="text"
                        value={field.text}
                        onChange={(e) => field.onChange(id, field.name, e.target.value)}
                        className='bg-white border border-gray-300 rounded-md m-2 p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                      />
                    );
                }
              })()}
            </label>
          </div>
        ))}
      </div>

      {/* Dynamic Handles */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};
