import React, { useState, useEffect } from 'react'

import { AxiosInstance } from 'api'

const Home = () => {

  const getCompanyInfo = async () => {
    await AxiosInstance.get("/api/dashboard/company").then((res) => {
      console.log(res.data.data)
    }).catch((err) => {

    })
  }

  useEffect(() => {
    getCompanyInfo();
  }, [])

  return (
    <div>Company Home</div>
  )
}

export default Home