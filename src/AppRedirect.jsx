export default function MyComponent() {
    const userAgent = window.navigator.userAgent.split('/')
    const match = String(userAgent).match(/\((.*?)\)/);
   
    return (
      <div>
        <p>Browser: {match[1].includes('Windows') ? 'windows' : 'otro'}</p>
      </div>
    );
   }


