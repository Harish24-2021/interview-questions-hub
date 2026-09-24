import React from 'react';

const SimpleCodeViewer = ({codeString}) => {

    return (
        <pre style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '15px' }}>
            <code>{codeString}</code>
        </pre>
    );
};

export default SimpleCodeViewer;