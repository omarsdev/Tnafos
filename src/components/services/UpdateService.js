import { VStack, HStack, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMyServices, updateService } from "../../utils";

export const UpdateService = () => {
  const { uuid } = useParams();
  const history = useHistory();

  const [input, setInput] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const fetchData = async () => {
    const Data = await getMyServices(uuid);
    if (Data.success) {
      let service = Data.data;
      delete service.category;
      delete service.name;
      delete service.description;
      setInput(service);
      console.log(service);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault();
    const resp = await updateService(uuid, input);
    if (resp.success) {
      history.push(`/dashboard/service`);
    } else {
      console.log(resp);
      setErrors(resp);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };

    return (
        <>
        {/* check if input has a prev stored value or not... */}
        {
            input? (
                <form onSubmit={(ev)=>handleUpdate(ev)}>
                  <VStack>
                  <label className="w-32 text-right">Price:
                  <Input
                    size="md"
                    type="text"
                    name="price"
                    value={input.name}
                    required
                    onChange={(ev) => handleChange(ev)}
                    autoComplete="off"
                    autoFocus="off"
                  />
                  </label>

                  <label className="w-32 text-right">Type:
                  <Input
                    size="md"
                    type="text"
                    name="type"
                    value={input.name}
                    required
                    onChange={(ev) => handleChange(ev)}
                    autoComplete="off"
                    autoFocus="off"
                  />
                  </label>

                  <HStack>
                    <Button>UPDATE</Button>
                    <Button onClick={handleCancel}>CANCEL</Button>
                  </HStack>
                  </VStack>
                </form>
            ) : null
        }
        </>
    )
}
