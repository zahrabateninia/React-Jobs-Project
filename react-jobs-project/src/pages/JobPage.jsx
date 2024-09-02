import React from 'react'
import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'

const JobPage = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)

  useEffect(() => {
    const fetchJob = async () =>{
        try {
            const res = await fetch(`/api/job/${id}`);
            const data = await res.json();
            setJob(data);
          } catch (error) {
            console.log('Error fetching data', error);
          } finally {
            setLoading(false);
          }
    }
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default JobPage
