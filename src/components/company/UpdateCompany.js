import { Box, Container, VStack, HStack,Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { showCompany, updateCompany } from "../../../../../../utils";

export const UpdateCompany = () => {
  const history = useHistory();

  const [input, setInput] = useState(null);
//   const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const fetchData = async () => {
    const Data = await showCompany();
    if (Data.success) {
      let company = Data.data;
      delete company.country;
      delete company.admin;
      delete company.category;
      setInput(company);
      console.log(company);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const resp = await updateCompany(input);
    if (resp.success) {
      history.push(`/dashboard/company`);
    } else {
      console.log(resp);
    //   setErrors(resp);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/company");
  };

    return (
        input && (
            <Container>
                <Box>Update your company info in the form below</Box>
                <form onSubmit={(ev)=>handleUpdate(ev)}>
                    <VStack>
                    <label className="block">
                    Company Name
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="name"
                        value={input.name}
                    />
                    </label>

                    <label className="block">
                    Type
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="type"
                        value={input.type}
                    />
                    </label>

                    <label className="block">
                    CR Number
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="cr"
                        value={input.cr}
                    />
                    </label>

                    <label className="block">
                    VAT Number
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="vat"
                        value={input.vat}
                    />
                    </label>

                    <label className="block">
                    Establishment Year
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="establishment_year"
                        value={input.establishment_year}
                    />
                    </label>

                    <label className="block">
                    Total Employees
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="total_employees"
                        value={input.total_employees}
                    />
                    </label>

                    <label className="block">
                    Bio
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="bio"
                        value={input.bio}
                    />
                    </label>

                    <label className="block">
                    Telephone
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="telephone"
                        value={input.telephone}
                    />
                    </label>

                    <label className="block">
                    Fax
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="fax"
                        value={input.fax}
                    />
                    </label>

                    <label className="block">
                    e-mail
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="email"
                        value={input.email}
                    />
                    </label>

                    <label className="block">
                    Website
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="website"
                        value={input.website}
                    />
                    </label>

                    <label className="block">
                    Country-Id
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="country_id"
                        value={input.country_id}
                    />
                    </label>

                    <label className="block">
                    City
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="city"
                        value={input.city}
                    />
                    </label>

                    <label className="block">
                    po_box
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="po_box"
                        value={input.po_box}
                    />
                    </label>

                    <label className="block">
                    ZIP_code
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="zip_code"
                        value={input.zip_code}
                    />
                    </label>

                    <label className="block">
                    Address
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="address"
                        value={input.address}
                    />
                    </label>

                    <label className="block">
                    Location:
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="location"
                        value={input.location}
                    />
                    </label>

                    <label className="block">
                    Logo:
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="logo"
                        value={input.logo}
                    />
                    </label>

                    <label className="block">
                    Category-Id
                    <Input
                        size="md"
                        onChange={(ev) => handleChange(ev)}
                        name="category_id"
                        value={input.category_id}
                    />
                    </label>
                    </VStack>
                    <HStack>
                        <Button>UPDATE</Button>
                        <Button onClick={handleCancel}>CANCEL</Button>
                    </HStack>
                </form>

            </Container>
        )
    )
}
