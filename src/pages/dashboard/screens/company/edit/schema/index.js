import * as Yup from "yup";

export const checkout = {
  formId: "register-form",
  formField: {
    name: {
      name: "name",
      label: "name",
      type: "text",
      placeholder: "eg. Tnafos",
      errorMsg: "Name is required.",
    },
    type: {
      name: "type",
      label: "Company type",
      type: "text",
      placeholder: "eg. company",
      errorMsg: "Company is required.",
    },
    cr: {
      name: "cr",
      label: "Cr number",
      type: "text",
      placeholder: "eg. 1010224455",
      errorMsg: "cr is required.",
    },
    vat: {
      name: "vat",
      label: "Vat number",
      type: "text",
      placeholder: "eg. 1300123456",
      errorMsg: "Vat Number is required.",
    },
    establishment_year: {
      name: "establishment_year",
      label: "Establishment year",
      type: "text",
      placeholder: "eg. 2018",
      errorMsg: "Establishment year is required.",
    },
    bio: {
      name: "bio",
      label: "Bio",
      type: "text",
      placeholder: "eg. some text about the company that describes it",
      errorMsg: "Bio is required.",
    },
    telephone: {
      name: "telephone",
      label: "Telephone Number",
      type: "text",
      placeholder: "eg. +966507820331",
      errorMsg: "telephone is required.",
    },
    fax: {
      name: "fax",
      label: "Fax Number",
      type: "text",
      placeholder: "eg. +966112223345",
      errorMsg: "Fax Number is required.",
    },
    email: {
      name: "email",
      label: "email",
      type: "text",
      placeholder: "eg. admin@tnafos.com",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    website: {
      name: "website",
      label: "Website",
      type: "text",
      placeholder: "eg. https://tnafos.com",
      errorMsg: "Website is required.",
    },
    city: {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "eg. Riyadh",
      errorMsg: "City is required.",
    },
    po_box: {
      name: "po_box",
      label: "PO Box",
      type: "text",
      placeholder: "eg. 11223",
      errorMsg: "PO Box is required.",
    },
    zip_code: {
      name: "zip_code",
      label: "Zip Code",
      type: "text",
      placeholder: "eg. 11224",
      errorMsg: "Zip Code is required.",
    },
    address: {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "eg. Riyadh, Salah Eldien Road",
      errorMsg: "Address is required.",
    },
    location: {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "eg. home",
      errorMsg: "Location is required.",
    },
  },
}

const {
  formField: {
    address, bio, city, cr, email, establishment_year, fax, location, name, po_box, telephone, type, vat, website, zip_code
  },
} = checkout;

export const initialValue = (company) => {
  const init = {};
  for (const key in company) {
    if (typeof (company[key]) === "string") {
      init[key] = company[key];
    } else {
      if (key === "category")
        init.category_id = {
          value: company.category.uuid,
          label: company.category.name,
        };
      else if (key === "country")
        init.country_id = {
          value: company.country.uuid,
          label: company.country.name,
        }
    }
  }
  return init
}

export const validation = [
  Yup.object().shape({
    [address.name]: Yup.string().required(address.errorMsg),
    [bio.name]: Yup.string().required(bio.errorMsg),
    [telephone.name]: Yup.string().required(telephone.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [cr.name]: Yup.string().required(cr.errorMsg),
    [establishment_year.name]: Yup.string().required(establishment_year.errorMsg),
    [fax.name]: Yup.string().required(fax.errorMsg),
    [location.name]: Yup.string().required(location.errorMsg),
    [name.name]: Yup.string().required(name.errorMsg),
    [po_box.name]: Yup.string().required(po_box.errorMsg),
    [type.name]: Yup.string().required(type.errorMsg),
    [vat.name]: Yup.string().required(vat.errorMsg),
    [website.name]: Yup.string().required(website.errorMsg),
    [zip_code.name]: Yup.string().required(zip_code.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
  }),
];
