import * as Yup from "yup";

export const checkout = {
  formId: "create-customer-form",
  formField: {
    company_name: {
      name: "company_name",
      label: "company name",
      type: "text",
      placeholder: "eg. Tnafos",
      errorMsg: "Company name is required.",
    },
    vat_number: {
      name: "vat_number",
      label: "vat number",
      type: "text",
      placeholder: "eg. 1300000",
      errorMsg: "Vat number is required.",
    },
    phone: {
      name: "phone",
      label: "phone",
      type: "text",
      placeholder: "eg. 0599882631",
      errorMsg: "Phone number is required."
    },
    fax: {
      name: "fax",
      label: "fax",
      type: "text",
      placeholder: "eg. 0114976262",
      errorMsg: "Fax is required."
    },
    website: {
      name: "website",
      label: "website",
      type: "text",
      placeholder: "eg. https://tnafos.com",
      errorMsg: "Website is required."
    },
    currency: {
      name: "currency",
      label: "currency",
      type: "text",
      placeholder: "eg. SAR",
      errorMsg: "Currency is required.",
    },
    language: {
      name: "language",
      label: "language",
      type: "text",
      placeholder: "eg. AR",
      errorMsg: "Language is required.",
    },
    address: {
      name: "address",
      label: "address",
      type: "text",
      placeholder: "eg. street 4",
      errorMsg: "Address is required.",
    },
    city: {
      name: "city",
      label: "city",
      type: "text",
      placeholder: "eg. Makkeh",
      errorMsg: "City is Riyadh.",
    },
    state: {
      name: "state",
      label: "state",
      type: "text",
      placeholder: "eg. Makkeh",
      errorMsg: "State is Riyadh.",
    },
    zipcode: {
      name: "zipcode",
      label: "zip code",
      type: "text",
      placeholder: "eg. 11442",
      errorMsg: "Zip code is Riyadh.",
    },
    country_code: {
      name: "country_code",
      label: "Country Code",
      type: "text",
      placeholder: "Country Code Ex SA",
      errorMsg: "Country code is required",
    },
    country_id: {
      name: "country_id",
      label: "country",
      type: "text",
      placeholder: "Country Code Ex Saudi Arabia",
      errorMsg: "Country is required",
    }
  },
};

const {
  formField: {
    company_name,
    vat_number,
    phone,
    fax,
    website,
    currency,
    language,
    address,
    city,
    state,
    zipcode,
    country_code,
    country_id,
  },
} = checkout;


export const initialValue = (customer) => {
  const init = {};
  for (const key in customer) {
    if (typeof (customer[key]) !== "object") {
      init[key] = customer[key];
    } else {
      if (key === "country")
        init.country_id = {
          value: customer.country.uuid,
          label: customer.country.name,
        };
    }
  }
  return init
}

export const validation = [
  Yup.object().shape({
    [company_name.name]: Yup.string().required(company_name.errorMsg),
    [vat_number.name]: Yup.string().required(vat_number.errorMsg),
    [phone.name]: Yup.string().required(phone.errorMsg),
    [fax.name]: Yup.string().required(fax.errorMsg),
    [website.name]: Yup.string().required(website.errorMsg),
    [currency.name]: Yup.string().required(currency.errorMsg),
    [language.name]: Yup.string().required(language.errorMsg),
    [address.name]: Yup.string().required(address.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
    [state.name]: Yup.string().required(state.errorMsg),
    [zipcode.name]: Yup.string().required(zipcode.errorMsg),
    // [country_code.name]: Yup.string().required(country_code.errorMsg),
    // [country_id.name]: Yup.string().required(country_id.errorMsg),
  }),
];
