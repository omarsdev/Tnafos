import React, { useState, useEffect } from 'react'

import { useHistory, useRouteMatch } from 'react-router-dom'
import { Grid } from '@mui/material'

import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import SuiBox from 'components/SuiBox'

import { AxiosInstance } from 'api'

import ContactCard from "./components/ContactCard"

const ContactHome = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const [contactList, setContactList] = useState(null)

  const getAllContactList = async () => {
    await AxiosInstance.get("/api/dashboard/contact").then(res => {
      setContactList(res.data.data)
    })
  }

  useEffect(() => {
    getAllContactList();
  }, []);

  const navigateToCreate = () => {
    history.push(`${match.path}/create`)
  }

  return contactList && (
    <SuiBox>
      <SuiButton onClick={navigateToCreate}>Create</SuiButton>
      {contactList.length === 0 ? (
        <SuiTypography>No Data</SuiTypography>
      ) : (
        contactList.map((e) => (
          <Grid item xs={12} lg={4} key={e.uuid}>
            <ContactCard data={e} />
          </Grid>
        ))
      )}
    </SuiBox>
  )
}

export default ContactHome