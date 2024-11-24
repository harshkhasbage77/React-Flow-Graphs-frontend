import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const SearchMessagesNode = ({ id, data }) => {
    const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Search Messages"
      fields={[
        { 
            label: 'Search Query Message',
            name: 'searchQuery',
            type: 'text',
            onChange: updateField
        },
        { 
            label: 'Connect with',
            name: 'connectWith',
            type: 'select',
            options: ['Slack', 'Notion', 'Clickup'],
            onChange: updateField
        },
        {
            label: 'Actions',
            name: 'actions',
            type: 'button',
            onClick: () => {
            const selectedOption = data.connectWith;
            let url = '';
            switch (selectedOption) {
                case 'Slack':
                url = 'https://slack.com/signin';
                break;
                case 'Notion':
                url = 'https://notion.so/login';
                break;
                case 'Clickup':
                url = 'https://app.clickup.com/login';
                break;
                default:
                url = '#';
            }
            window.location.href = url;
            },
            buttonText: 'Connect'
        }
      ]}
      handles={[
        { type: 'source', position: 'right', id: 'messagesOutput' },
      ]}
      styles={{ backgroundColor: '#e8f5e9' }}
    />
  );
};
