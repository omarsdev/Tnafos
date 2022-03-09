import React, { useState, useEffect } from 'react'

import { Box, Grid, Typography } from '@mui/material'

import { AxiosInstance } from 'api'
import SuiButton from 'components/SuiButton'
import { useHistory, useRouteMatch } from 'react-router-dom'
import CustomerCard from './components/CustomerCard'

const CustomerHome = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const [customerList, setCustomerList] = useState(null);

  const getListOfCustomers = async () => {
    await AxiosInstance.get("/api/dashboard/customer").then(res => {
      setCustomerList(res.data.data)
    })
  }

  useEffect(() => {
    getListOfCustomers();
  }, [])

  const navigateToCreate = () => {
    history.push(`${match.path}/create`)
  }

  return customerList && (
    <Box>
      <SuiButton onClick={navigateToCreate}>Create</SuiButton>
      {customerList.length === 0 ? (
        <Typography>No Data</Typography>
      ) : (
        customerList.map((e) => (
          <Grid item xs={12} lg={4} key={e.uuid}>
            <CustomerCard data={e} />
          </Grid>
        ))
      )}
    </Box>
  )
}

export default CustomerHome