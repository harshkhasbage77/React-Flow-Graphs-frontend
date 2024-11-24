import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, label, handles = [], fields = [], styles = {} }) => {
  return (
    <div style={{ width: 200, padding: '10px', border: '1px solid black', borderRadius: '8px', ...styles }}>
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
                  >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option}>
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
                  >
                  {field.buttonText}
                  </button>
                );
                case 'text':
                default:
                return (
                  <input
                  type="text"
                  value={field.text}
                  onChange={(e) => field.onChange(id, field.name, e.target.value)}
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
