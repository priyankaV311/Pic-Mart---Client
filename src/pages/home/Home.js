import React, { useEffect } from 'react'
import './Home.scss';
import { axiosClient } from '../../utils/axiosClient';

function Home() {
  useEffect(() => {
    fetchData();
  }, []);
  let data;
	const fetchData = async () => {
	
    try {
    data = await axiosClient.get('/post/all');
    } catch (err) {
        console.log(err);
    }
	};
	return <div>
    
  </div>;
};

export default Home;
