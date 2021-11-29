import { Input, Button, Box, Text, Heading } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AxiosInstance } from "../../../../api/AxiosInstance";
import { AlertContext } from "context";

export const CreateCompany = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const setAlert = alertProviderValue;

  const history = useHistory();
  const [err, setErr] = useState(null);

  const { register, handleSubmit } = useForm();

  const createCompany = async (e, input) => {
    e.preventDefault();
    await AxiosInstance.post("/api/dashboard/company/create", input)
      .then((res) => {
        setAlert({
          message: "Company profile has been created!",
          type: "success",
        });
        history.push("/dashboard/company");
      })
      .catch((err) => {
        setErr(err.response.data);
        setAlert({
          message: ` ${err.response.data}`,
          type: "error",
        });
      });
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
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("name", { required: "This field is required!" })}
          />
          {err.name && <p className="text-red-700">{err.name?.message}</p>}
        </label>

        <label className="block">
          Type
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("type", { required: "This field is required!" })}
          />
          {err.type && <p className="text-red-700">{err.type?.message}</p>}
        </label>

        <label className="block">
          CR Number
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("cr", { required: "This field is required!" })}
          />
          {err.cr && <p className="text-red-700">{err.cr?.message}</p>}
        </label>

        <label className="block">
          VAT Number
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("vat", { required: "This field is required!" })}
          />
          {err.vat && <p className="text-red-700">{err.vat?.message}</p>}
        </label>

        <label className="block">
          Establishment Year
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("establishment_year", {
              required: "This field is required!",
            })}
          />
        </label>

        <label className="block">
          Total Employees
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("total_employees", {
              required: "This field is required!",
            })}
          />
          {err.total_employees && (
            <p className="text-red-700">{err.total_employees?.message}</p>
          )}
        </label>

        <label className="block">
          Bio
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("bio", { required: "This field is required!" })}
          />
          {err.bio && <p className="text-red-700">{err.bio?.message}</p>}
        </label>

        <label className="block">
          Telephone
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("telephone", { required: "This field is required!" })}
          />
          {err.telephone && (
            <p className="text-red-700">{err.telephone?.message}</p>
          )}
        </label>

        <label className="block">
          Fax
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("fax", { required: "This field is required!" })}
          />
          {err.fax && <p className="text-red-700">{err.fax?.message}</p>}
        </label>

        <label className="block">
          e-mail
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("email", { required: "This field is required!" })}
          />
          {err.email && <p className="text-red-700">{err.email?.message}</p>}
        </label>

        <label className="block">
          Website
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("website", { required: "This field is required!" })}
          />
          {err.website && (
            <p className="text-red-700">{err.website?.message}</p>
          )}
        </label>

        <label className="block">
          Country-Id
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("country_id", { required: "This field is required!" })}
          />
          {err.country_id && (
            <p className="text-red-700">{err.country_id?.message}</p>
          )}
        </label>

        <label className="block">
          City
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("city", { required: "This field is required!" })}
          />
          {err.city && <p className="text-red-700">{err.city?.message}</p>}
        </label>

        <label className="block">
          po_box
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("po_box", { required: "This field is required!" })}
          />
          {err.po_box && <p className="text-red-700">{err.po_box?.message}</p>}
        </label>

        <label className="block">
          ZIP_code
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("zip_code", { required: "This field is required!" })}
          />
          {err.zip_code && (
            <p className="text-red-700">{err.zip_code?.message}</p>
          )}
        </label>

        <label className="block">
          Address
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("address", { required: "This field is required!" })}
          />
          {err.address && (
            <p className="text-red-700">{err.address?.message}</p>
          )}
        </label>

        <label className="block">
          Location:
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("location", { required: "This field is required!" })}
          />
          {err.location && (
            <p className="text-red-700">{err.location?.message}</p>
          )}
        </label>

        <label className="block">
          Logo:
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("logo", { required: "This field is required!" })}
          />
          {err.logo && <p className="text-red-700">{err.logo?.message}</p>}
        </label>

        <label className="block">
          Category-Id
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("category_id", {
              required: "This field is required!",
            })}
          />
        </label>

        <Button colorScheme="yellow" m="5" ml="96" type="submit">
          SAVE
        </Button>
        <Box>
          {err?.message && (
            <Text className="text-center mt-4" color="red">
              {err?.message}
            </Text>
          )}
        </Box>
      </form>
    </>
  );
};
