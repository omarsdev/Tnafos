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
// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the SuiEditor
import SuiEditorRoot from "components/SuiEditor/SuiEditorRoot";

function SuiEditor(props) {
  return (
    <SuiEditorRoot>
      <ReactQuill theme="snow" {...props} />
    </SuiEditorRoot>
  );
}

export default SuiEditor;
