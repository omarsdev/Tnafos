import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Grid } from '@mui/material'

import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import SuiBox from 'components/SuiBox'

import LeadsSourceCard from "./components/LeadsSourceCard"

import { AxiosInstance } from 'api';

const LeadSourceHome = () => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(match)

  const [leadSourceList, setLeadSourceList] = useState(null)

  const getAllLeadSourceList = async () => {
    await AxiosInstance.get("/api/dashboard/lead-source").then(res => {
      setLeadSourceList(res.data.data)
    })
  }

  useEffect(() => {
    getAllLeadSourceList();
  }, []);

  const navigateToCreate = () => {
    history.push(`${match.path}create`)
  }

  return leadSourceList && (
    <SuiBox>
      <SuiButton onClick={navigateToCreate}>Create</SuiButton>
      {leadSourceList.length === 0 ? (
        <SuiTypography>No Data</SuiTypography>
      ) : (
        leadSourceList.map((e) => (
          <Grid item xs={12} lg={4} key={e.uuid}>
            <LeadsSourceCard data={e} />
          </Grid>
        ))
      )}
    </SuiBox>
  )
}

export default LeadSourceHome