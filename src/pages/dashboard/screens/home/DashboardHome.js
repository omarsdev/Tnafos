import React from 'react'

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const DashboardHome = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div>Home</div>
        </DashboardLayout>
    )
}

export default DashboardHome