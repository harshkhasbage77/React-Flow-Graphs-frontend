// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='knowledgeBaseSearch' label='Knowledge Base Search' />
                <DraggableNode type='CSVLoader' label='CSV Loader' />
                <DraggableNode type='SearchMessages' label='Search Messages' />
                <DraggableNode type='InvestmentMemo' label='Investment Memo' />
                <DraggableNode type='DocumentMeetingSummary' label='Document/Meeting Summary Connect' />
            </div>
        </div>
    );
};
