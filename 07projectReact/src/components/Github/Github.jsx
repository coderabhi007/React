import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
   // const [data, setData] = useState(null);
       let data=useLoaderData()
    /*useEffect(() => {
        let isMounted = true; // Flag to avoid setting state on unmounted component

        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                if (isMounted) {
                    setData(data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));

        // Cleanup function to reset the flag
        return () => {
            isMounted = false;
        };
    }, []);*/ // Empty dependency array ensures it runs only on mount

    return (
        < div className='text-left  bg-gray-700 h-auto w-Auto'>
            <h1 className='pl-96'>Followers: {data ? data.followers : 'Loading...'}</h1>
            <img src={data.avatar_url} alt="Git pitcture" width={300} />
        </div>
    );
}

export default Github
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary');
    return res.json(); // Ensure there’s no extra comma here
};

