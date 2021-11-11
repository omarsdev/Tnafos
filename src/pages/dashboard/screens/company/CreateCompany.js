import { Box, Input, Button, Grid, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCompany } from "../../../../utils";
import { RegularInput } from "../../../../components";

export const CreateCompany = () => {
  const [input, setInput] = useState({
    name: "",
    type: "",
    cr: "",
    vat: "",
    establishment_year: "",
    total_employees: "",
    bio: "",
    telephone: "",
    fax: "",
    email: "",
    website: "",
    country_id: "",
    city: "",
    po_box: "",
    zip_code: "",
    address: "",
    location: "",
    logo: "",
    category_id: "",
  });

  const history = useHistory();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput({ ...input, [name]: value });
  // };

  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await createCompany(input);
    console.log(response);
    history.push("/dashboard/company");
  };

  return (
    <>
      <Heading
        color="yellow.500"
        fontWeight="medium"
        fontSize="x-large"
        fontFamily="inhirit"
        mb="5"
      >
        Fill in Company Info
      </Heading>
      <form>
        <label className="block">
          Company Name
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="name"
            value={input.name}
          />
        </label>

        <label className="block">
          Type
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="type"
            value={input.type}
          />
        </label>

        <label className="block">
          CR Number
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="cr"
            value={input.cr}
          />
        </label>

        <label className="block">
          VAT Number
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="vat"
            value={input.vat}
          />
        </label>

        <label className="block">
          Establishment Year
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="establishment_year"
            value={input.establishment_year}
          />
        </label>

        <label className="block">
          Total Employees
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="total_employees"
            value={input.total_employees}
          />
        </label>

        <label className="block">
          Bio
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="bio"
            value={input.bio}
          />
        </label>

        <label className="block">
          Telephone
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="telephone"
            value={input.telephone}
          />
        </label>

        <label className="block">
          Fax
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="fax"
            value={input.fax}
          />
        </label>

        <label className="block">
          e-mail
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="email"
            value={input.email}
          />
        </label>

        <label className="block">
          Website
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="website"
            value={input.website}
          />
        </label>

        <label className="block">
          Country-Id
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="country_id"
            value={input.country_id}
          />
        </label>

        <label className="block">
          City
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="city"
            value={input.city}
          />
        </label>

        <label className="block">
          po_box
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="po_box"
            value={input.po_box}
          />
        </label>

        <label className="block">
          ZIP_code
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="zip_code"
            value={input.zip_code}
          />
        </label>

        <label className="block">
          Address
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="address"
            value={input.address}
          />
        </label>

        <label className="block">
          Location:
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="location"
            value={input.location}
          />
        </label>

        <label className="block">
          Logo:
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="logo"
            value={input.logo}
          />
        </label>

        <label className="block">
          Category-Id
          <RegularInput
            size="sm"
            borderRadius="lg"
            name="category_id"
            value={input.category_id}
          />
        </label>

        <Button
          colorScheme="blue"
          onClick={(ev) => handleCreate(ev)}
          m="5"
          ml="96"
        >
          SAVE
        </Button>
      </form>
    </>
  );
};
