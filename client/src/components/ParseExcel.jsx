import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import Data from './Data'

export const ParseExcel = () => {
  const [data, setData] = useState([])
  const [filename, setFileName] = useState(null)
  const handleFile = async (e) => {
    const file = e.target.files[0]
    setFileName(file.name)
    const data = await file.arrayBuffer()
    const workbook = XLSX.readFile(data, { sheetRows: 1000 })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 0,
      defval: '',
    })
    setData(jsonData)
  }

  return (
    <div className="text-center mt-5">
      <h1 className="headCol">Parse from Excel</h1>
      {filename && (
        <p>
          FileName: <span>{filename}</span>
        </p>
      )}
      <input type="file" accept=".xls, .xlsx" onChange={(e) => handleFile(e)} />
      {data.map((dat) => (
        <Data key={dat.id_modification} {...dat} />
      ))}
    </div>
  )
}
