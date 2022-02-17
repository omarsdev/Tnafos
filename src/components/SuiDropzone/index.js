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

import { useEffect, useRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Custom styles for the SuiDropzone
import SuiDropzoneRoot from "components/SuiDropzone/SuiDropzoneRoot";

function SuiDropzone({ options }) {
  const dropzoneRef = useRef();

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <SuiDropzoneRoot
      component="form"
      action="/file-upload"
      ref={dropzoneRef}
      className="form-control dropzone"
    >
      <SuiBox className="fallback">
        <SuiBox component="input" name="file" type="file" multiple />
      </SuiBox>
    </SuiDropzoneRoot>
  );
}

// Typechecking props for the SuiDropzone
SuiDropzone.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SuiDropzone;
