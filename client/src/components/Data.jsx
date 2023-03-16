import React from 'react'
import '../App.css'

const Data = ({
  id_modification,
  Марка,
  Модель,
  Модификация,
  Поколение,
  Привод,
}) => {
  const onSubmitButton = async (e) => {
    if (e) {
      e.preventDefault()
    }
    try {
      const body = [
        id_modification,
        Марка,
        Модель,
        Модификация,
        Поколение,
        Привод,
      ]
      const response = fetch('http://localhost:5000/autos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      console.log(response)
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>id_modification</th>
            <th>Марка</th>
            <th>Модель</th>
            <th>Модификация</th>
            <th>Поколение</th>
            <th>Привод</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id_modification}</td>
            <td>{Марка}</td>
            <td>{Модель}</td>
            <td>{Модификация}</td>
            <td>{Поколение}</td>
            <td>{Привод}</td>
          </tr>
        </tbody>
      </table>
      <button className="btnStl" onClick={() => onSubmitButton()}>
        Отправить в базу данных
      </button>
    </>
  )
}

export default Data
