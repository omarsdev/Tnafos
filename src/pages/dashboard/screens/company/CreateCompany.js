import { Box, Input, Button, Grid, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCompany } from "../../../../utils";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await createCompany(input);
    console.log(response);
    history.push("/dashboard/company");
  };

  return (
    <Box
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      borderWidth="1px"
      w="4xl"
      px="15"
      pt="5"
    >
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
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          <label className="block">
            Company Name
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="name"
              value={input.name}
            />
          </label>

          <label className="block">
            Type
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="type"
              value={input.type}
            />
          </label>

          <label className="block">
            CR Number
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="cr"
              value={input.cr}
            />
          </label>

          <label className="block">
            VAT Number
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="vat"
              value={input.vat}
            />
          </label>

          <label className="block">
            Establishment Year
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="establishment_year"
              value={input.establishment_year}
            />
          </label>

          <label className="block">
            Total Employees
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="total_employees"
              value={input.total_employees}
            />
          </label>

          <label className="block">
            Bio
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="bio"
              value={input.bio}
            />
          </label>

          <label className="block">
            Telephone
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="telephone"
              value={input.telephone}
            />
          </label>

          <label className="block">
            Fax
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="fax"
              value={input.fax}
            />
          </label>

          <label className="block">
            e-mail
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="email"
              value={input.email}
            />
          </label>

          <label className="block">
            Website
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="website"
              value={input.website}
            />
          </label>

          <label className="block">
            Country-Id
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="country_id"
              value={input.country_id}
            />
          </label>

          <label className="block">
            City
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="city"
              value={input.city}
            />
          </label>

          <label className="block">
            po_box
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="po_box"
              value={input.po_box}
            />
          </label>

          <label className="block">
            ZIP_code
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="zip_code"
              value={input.zip_code}
            />
          </label>

          <label className="block">
            Address
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="address"
              value={input.address}
            />
          </label>

          <label className="block">
            Location:
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="location"
              value={input.location}
            />
          </label>

          <label className="block">
            Logo:
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="logo"
              value={input.logo}
            />
          </label>

          <label className="block">
            Category-Id
            <Input
              size="sm"
              borderRadius="lg"
              onChange={(ev) => handleChange(ev)}
              name="category_id"
              value={input.category_id}
            />
          </label>
        </Grid>

        <Button
          colorScheme="blue"
          onClick={(ev) => handleCreate(ev)}
          m="5"
          ml="96"
        >
          SAVE
        </Button>
      </form>
    </Box>
  );
};
