import { useState } from "react"

const useFormChange = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e: any) => {
    if (typeof e === 'string') {
      setValue(e)
    } else {
      setValue(e.target.value)
    }
  }
  return {
    value,
    onChange: handleChange
  }
}


export default useFormChange