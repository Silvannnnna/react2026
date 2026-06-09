import { useState, useEffect } from 'react'

const LifeCylce = () => {
    const [text, setText] = useState("")
    //componentDidMount
    useEffect(() => {
        console.log("componente cargado")
    },[])
    //componentDidUpdate
    useEffect(() => {
        console.log("componente actualizado")
    },[text])
    //componentWillUnmount
    useEffect(() => {
        return () => console.log("componente desmontado")
    },[])
    //siempre mount y update
    useEffect(() => {
        console.log("componente siempre")
    })
  return (
    <>
    <div>LifeCylce</div>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

    </>
    
  )
}

export default LifeCylce