import React,{useState} from 'react'

export default function Upload(props){
  const [data , setData] = useState([])
  const [isSelected , setIsSelected] = useState(false)
  const [selectedFile, setSelectedFile] = useState()

  const handleChange =(e)=>{
    const result = e.target.files[0]
    setSelectedFile(result)
    console.log(result)
    setIsSelected(true)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = function(){
      //console.log(reader.result)
      const result1 = reader.result.split('\n').map(function (result1){
        return result1.split(' ')
      })
      console.log(result1)
      setData(result1)
    }
    reader.readAsText(selectedFile)
  }
  // const result = data.join('')
  // const sampleData = result.split(' ')
  // console.log(sampleData)
  


    return( 
        <div>
           <form onSubmit ={handleSubmit}>
                <input  type ="file" name = 'fileName'onChange = {handleChange} />
                <input type ="submit" value ="upload"/>
            </form>
        </div>
    )
}
