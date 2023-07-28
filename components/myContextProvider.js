// MyContextProvider.js
import React, { useState } from 'react'
import MyContext from './myContext'
import firebaseConfig from './firebaseConfig'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where
} from 'firebase/firestore'
import { ReinhardToneMapping } from 'three'
const MyContextProvider = ({ children }) => {
  // Define the state or data you want to share
  const [data, setData] = useState({
    someValue: 'Hello from Context!'
    // add more values as needed
  })
  const [orders, setOrders] = useState([])
  const [allJenis, setAllJenis] = useState(['Kambing', 'Nasi'])
  const [seasonal, setSeasonal] = useState([])
  // Function to update the context state
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  async function GetMenu(uniqueJenisArrayC) {
    const season = query(
      collection(db, 'makanan'),
      uniqueJenisArrayC > 0
        ? where('jenis', 'array-contains-any', uniqueJenisArrayC)
        : where('jenis', 'array-contains-any', ['Nasi']),
      limit(10)
    )
    const seasonSnapshot = await getDocs(season)
    // console.log(season)
    const newSeasons = []

    seasonSnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      const newSeason = {
        nama: doc.data().nama,
        harga: doc.data().harga,
        jenis: doc.data().jenis,
        disukai: doc.data().disukai,
        totalp: doc.data().totalp,
        url: doc.data().url
      }
      newSeasons.push(newSeason)
      // console.log(doc.id, ' => ', doc.data())
    })
    console.log('season:', newSeasons) //
    setSeasonal(newSeasons)
  }
  async function getAllJenis() {
    const uniqueJenisSet = new Set()
    orders.forEach(order => {
      uniqueJenisSet.add(order.jenis)
    })
    const uniqueJenisArray = Array.from(uniqueJenisSet)
    const filteredUniqueJenisArray = uniqueJenisArray.filter(
      item => item !== undefined
    )

    const uniqueJenisArrayC = [].concat(...filteredUniqueJenisArray)
    // Set the state with the updated 'allJenis' array
    seasonal > 0 ? setAllJenis(uniqueJenisArrayC) : null
    GetMenu(uniqueJenisArrayC)

    console.log('jenis:', uniqueJenisArrayC) // The allJenis state may not be updated synchronously, so log inside the useEffect where it's being used
    return uniqueJenisArrayC
  }

  const updateContextValue = newValue => {
    setData(prevData => ({
      ...prevData,
      someValue: newValue
    }))
  }
  const addOrder = (nama, harga, url, jumlah, jenis) => {
    const newOrder = { nama, harga, url, jumlah, jenis }
    setOrders(prevOrders => [...prevOrders, newOrder])
    getAllJenis()
  }
  const setJumlah = (nama, newJumlah) => {
    // Use the map function to create a new array with updated "jumlah" values
    const updatedOrders = orders.map(order => {
      if (order.nama === nama) {
        return { ...order, jumlah: order.jumlah + 1 } // Update the jumlah value
      }

      return order // Return the original order if the "nama" doesn't match
    })

    setOrders(updatedOrders)
    console.log(orders) // Update the state with the new array
  }
  const deleteOrder = ({ nama }) => {
    const updatedOrders = orders.filter(order => order.nama !== nama)
    getAllJenis()

    setOrders(updatedOrders)
    console.log(nama)
  }

  const minJumlah = (nama, newJumlah) => {
    // Use the map function to create a new array with updated "jumlah" values
    const updatedOrders = orders.map(order => {
      if (order.nama === nama) {
        return { ...order, jumlah: order.jumlah - 1 } // Update the jumlah value
      }
      return order // Return the original order if the "nama" doesn't match
    })

    setOrders(updatedOrders)
    console.log(orders) // Update the state with the new array
  }
  const calculateTotalPrice = () => {
    return orders.reduce((total, order) => {
      return total + order.harga * order.jumlah
    }, 0)
  }

  return (
    <MyContext.Provider
      value={{
        ...data,
        updateContextValue,
        orders,
        addOrder,
        setJumlah,
        minJumlah,
        deleteOrder,
        calculateTotalPrice,
        getAllJenis,
        allJenis,
        seasonal
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
