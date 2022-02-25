/**
=========================================================
* Soft UI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableCell from "@mui/material/TableCell";

// Soft UI Dashboard PRO React components
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" sx={{ border: noBorder && 0 }}>
        <SuiBox display="flex" alignItems="center" width="max-content">
          <SuiBox component="img" src={image} alt={content} width="1.5rem" height="auto" />{" "}
          <SuiBox display="flex" flexDirection="column" ml={3}>
            <SuiTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="medium" textTransform="capitalize">
              {content}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
        <SuiBox display="flex" flexDirection="column">
          <SuiTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </SuiTypography>
          <SuiTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {content}
          </SuiTypography>
        </SuiBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
