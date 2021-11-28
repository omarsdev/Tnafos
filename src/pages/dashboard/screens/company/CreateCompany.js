import { Input, Button, Grid, Heading } from "@chakra-ui/react";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      <form onSubmit={handleSubmit(createCompany)}>
        <label className="block">
          Company Name
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("name", { required: "This field is required!" })}
          />
          {errors.name && (
            <p className="text-red-700">{errors.name?.message}</p>
          )}
        </label>

        <label className="block">
          Type
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("type", { required: "This field is required!" })}
          />
          {errors.type && (
            <p className="text-red-700">{errors.type?.message}</p>
          )}
        </label>

        <label className="block">
          CR Number
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("cr", { required: "This field is required!" })}
          />
          {errors.cr && <p className="text-red-700">{errors.cr?.message}</p>}
        </label>

        <label className="block">
          VAT Number
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("vat", { required: "This field is required!" })}
          />
          {errors.vat && <p className="text-red-700">{errors.vat?.message}</p>}
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
          {errors.total_employees && (
            <p className="text-red-700">{errors.total_employees?.message}</p>
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
          {errors.bio && <p className="text-red-700">{errors.bio?.message}</p>}
        </label>

        <label className="block">
          Telephone
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("telephone", { required: "This field is required!" })}
          />
          {errors.telephone && (
            <p className="text-red-700">{errors.telephone?.message}</p>
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
          {errors.fax && <p className="text-red-700">{errors.fax?.message}</p>}
        </label>

        <label className="block">
          e-mail
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("email", { required: "This field is required!" })}
          />
          {errors.email && (
            <p className="text-red-700">{errors.email?.message}</p>
          )}
        </label>

        <label className="block">
          Website
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("website", { required: "This field is required!" })}
          />
          {errors.website && (
            <p className="text-red-700">{errors.website?.message}</p>
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
          {errors.country_id && (
            <p className="text-red-700">{errors.country_id?.message}</p>
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
          {errors.city && (
            <p className="text-red-700">{errors.city?.message}</p>
          )}
        </label>

        <label className="block">
          po_box
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("po_box", { required: "This field is required!" })}
          />
          {errors.po_box && (
            <p className="text-red-700">{errors.po_box?.message}</p>
          )}
        </label>

        <label className="block">
          ZIP_code
          <Input
            size="sm"
            type="text"
            borderRadius="lg"
            {...register("zip_code", { required: "This field is required!" })}
          />
          {errors.zip_code && (
            <p className="text-red-700">{errors.zip_code?.message}</p>
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
          {errors.address && (
            <p className="text-red-700">{errors.address?.message}</p>
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
          {errors.location && (
            <p className="text-red-700">{errors.location?.message}</p>
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
          {errors.logo && (
            <p className="text-red-700">{errors.logo?.message}</p>
          )}
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
      </form>
    </>
  );
};
