import { useEffect, useState } from 'react'
import { ForceGraph2D } from 'react-force-graph'
import { getOldData } from './lib/axios'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    const data = async () => getOldData()
    console.log('data', data)
    setData(data)
  }, [])

  return <p>{JSON.stringify(data)}</p>
  // <ForceGraph2D graphData={data} />
}

export default App
