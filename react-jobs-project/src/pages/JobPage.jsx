import React from 'react'
// import {useEffect, useState} from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
  const { id } = useParams()
  const job = useLoaderData()

// Fetching Data Using useEffect: 

//   const [job, setJob] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchJob = async () =>{
//         try {
//             const res = await fetch(`/api/jobs/${id}`);
//             const data = await res.json();
//             console.log(data)
//             setJob(data);
//           } catch (error) {
//             console.log('Error fetching data', error);
//           } finally {
//             setLoading(false);
//           }
//     }
//     fetchJob()
//   }, [])
   return <h1> { job.title }</h1>
 };


// Fetching Data using Data Loader from React Router

const jobLoader = async ({ params })=> {
    const res =  await fetch(`/api/jobs/${ params.id }`)
    const data = res.json()
    return data
};


export { JobPage as default, jobLoader }
