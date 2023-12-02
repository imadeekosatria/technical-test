/* eslint-disable */

import "./App.css";
// import Mahasiswa from "./component/mahasiswa";
import { useState } from "react";
import Json from "./component/result"
import { Dialog, Pane } from "evergreen-ui";

function App() {
  // const students = [
  //   {
  //     id: 1,
  //     name: 'mahasiswa 1',
  //   },
  //   {
  //     id: 2,
  //     name: 'mahasiswa 2',
  //   },
  //   {
  //     id: 3,
  //     name: 'mahasiswa 3',
  //   },
  //   {
  //     id: 4,
  //     name: 'mahasiswa 4',
  //   },
  //   {
  //     id: 5,
  //     name: 'mahasiswa 5',
  //   },
  //   {
  //     id: 6,
  //     name: 'mahasiswa 6',
  //   },
  //   {
  //     id: 7,
  //     name: 'mahasiswa 7',
  //   },
  //   {
  //     id: 8,
  //     name: 'mahasiswa 8',
  //   },
  //   {
  //     id: 9,
  //     name: 'mahasiswa 9',
  //   },
  //   {
  //     id: 10,
  //     name: 'mahasiswa 10',
  //   }
  // ]
  
  let penilaian ={
    "aspek_penilaian_1": {
      "mahasiswa_1": 1,
      "mahasiswa_2": 1,
      "mahasiswa_3": 1,
      "mahasiswa_4": 1,
      "mahasiswa_5": 1,
      "mahasiswa_6": 1,
      "mahasiswa_7": 1,
      "mahasiswa_8": 1,
      "mahasiswa_9": 1,
      "mahasiswa_10": 1,
    },
    "aspek_penilaian_2":{
      "mahasiswa_1": 1,
      "mahasiswa_2": 1,
      "mahasiswa_3": 1,
      "mahasiswa_4": 1,
      "mahasiswa_5": 1,
      "mahasiswa_6": 1,
      "mahasiswa_7": 1,
      "mahasiswa_8": 1,
      "mahasiswa_9": 1,
      "mahasiswa_10": 1,
    },
    "aspek_penilaian_3":{
      "mahasiswa_1": 1,
      "mahasiswa_2": 1,
      "mahasiswa_3": 1,
      "mahasiswa_4": 1,
      "mahasiswa_5": 1,
      "mahasiswa_6": 1,
      "mahasiswa_7": 1,
      "mahasiswa_8": 1,
      "mahasiswa_9": 1,
      "mahasiswa_10": 1,
    },
    "aspek_penilaian_4":{
      "mahasiswa_1": 1,
      "mahasiswa_2": 1,
      "mahasiswa_3": 1,
      "mahasiswa_4": 1,
      "mahasiswa_5": 1,
      "mahasiswa_6": 1,
      "mahasiswa_7": 1,
      "mahasiswa_8": 1,
      "mahasiswa_9": 1,
      "mahasiswa_10": 1,
    }
  }

  const [result, setResult] = useState(penilaian)

  const [show, setShow] = useState(false)

  const handleChange = (event) => {
    // console.log(event.target.getAttribute('data-id'))
    const name = event.target.name
    const mhs = event.target.getAttribute('data-id')
    const value = event.target.value
    setResult({...result, ...result[name][mhs]=parseInt(value)})
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true)
  }
  
  return (
    <>
      <main>
        <div className="mb-20">
          <h1 className="text-slate-900 capitalize text-center font-semibold text-2xl mt-8">
            Aplikasi Penilaian Siswa
          </h1>
          <form className="w-11/12 mx-auto" onSubmit={handleSubmit}>
            <table className="my-4 mx-auto px-4 relative">
              <tr>
                <th className="w-52"></th>
                <th className="w-24">Aspek Penilaian 1</th>
                <th className="w-24">Aspek Penilaian 2</th>
                <th className="w-24">Aspek Penilaian 3</th>
                <th className="w-24">Aspek Penilaian 4</th>
              </tr>
              {/* {students.map((item)=>{
                return <Mahasiswa key={item.id} mahasiswa={item.name}/>
              })} */}
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 1</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_1" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_1" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_1" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_1" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 2</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_2" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_2" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_2" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_2" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 3</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_3" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_3" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_3" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_3" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 4</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_4" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_4" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_4" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_4" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 5</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_5" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_5" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_5" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_5" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 6</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_6" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_6" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_6" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_6" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 7</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_7" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_7" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_7" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_7" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 8</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_8" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_8" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_8" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_8" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 9</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_9" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_9" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_9" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_9" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <tr className="border-collapse border h-12 mx-auto">
                <td className="flex items-center justify-center h-12 gap-x-4 w-fit px-4">
                  <box-icon type="solid" name="user-circle"></box-icon>
                  <span className="capitalize">Mahasiswa 10</span>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_1" data-id="mahasiswa_10" className="border w-full" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_2" data-id="mahasiswa_10" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_3" data-id="mahasiswa_10" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="px-3">
                  <select name="aspek_penilaian_4" data-id="mahasiswa_10" className="border w-full" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              </tr>
              <button
                type="submit"
                className="bg-slate-950 text-slate-200 p-2 absolute my-4 right-0"
              >
                Simpan
              </button>
            </table>
          </form>
        </div>
        <Dialog title="Result" isShown={show} onCloseComplete={()=> setShow(false)} hasFooter={false} width={"60rem"}>    
          <Json result={result} className={show}/>
        </Dialog>
      </main>
    </>
  );
}

export default App;
