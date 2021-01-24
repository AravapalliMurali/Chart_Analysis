import React,{useState} from 'react'

export default function Upload(props){
  const [isSelected , setIsSelected] = useState(false)
  const [selectedFile, setSelectedFile] = useState()

  const handleChange =(e)=>{
    const result = e.target.files[0]
    setSelectedFile(result)
    //console.log(result)
    setIsSelected(true)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = function(){
      //console.log(reader.result)
      const result = reader.result.split('\n').map(function (result){
        return result.split(',',2)
      })
      console.log(result)
    }
    reader.readAsText(selectedFile)
  }

    return(
        <div>
           <form onSubmit ={handleSubmit}>
                <input  type ="file" name = 'fileName'onChange = {handleChange} />
                <input type ="submit" value ="upload"/>
            </form>
        </div>
    )
}
