// submit.js

export const SubmitButton = () => {
    return (
        <div className="" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
            <button className="" type="submit" style={buttonStyle}>Submit</button>
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
