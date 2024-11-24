import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex flex-col p-4'>
      <div className="mt-4">
        <PipelineToolbar />
      </div>
      <div className='w-full mt-4'> 
        <PipelineUI />
      </div>
      <div className="mt-4">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
