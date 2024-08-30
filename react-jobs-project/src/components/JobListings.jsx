import { useState, useEffect} from 'react';
import JobListing from './JobListing';
// Make a request to fetch the data from json server:

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  // to show spinner when fetching data we need loading
  const [loading, setLoading] = useState(true)

  // useEffect takes a function and a dependency array:
  useEffect(()=>{
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:8000/jobs")
            const data = await res.json()
            setJobs()
        } catch (error) {
            console.log("Error fetching data", error)
        }finally{
          setLoading(false)  
        }

    }
  })

  
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
      </div>
    </section>
  );
};
export default JobListings;