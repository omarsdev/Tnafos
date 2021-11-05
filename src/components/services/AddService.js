import { HStack, VStack, Button, Input} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createService } from "../../utils";

export const AddService = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    category_id: "",
    type: "",
    uuid: "",
  });
  const history = useHistory();
  // const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    const response = await createService(input);
    if (response.success) {
      history.push("/dashboard/service");
    } else {
      // setErrors(response.errors);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/service");
  };



    return (
        <form onSubmit={(ev)=>handleAddService(ev)}>
          <VStack>
          <label>
          name:
          <Input
            size="md"
            onChange={(ev) => handleChange(ev)}
            name="name"
            value={input.name}
          />
        </label>

        <label>
          description :
          <Input
            size="md"
            onChange={(ev) => handleChange(ev)}
            name="description"
            value={input.description}
          />
        </label>

        <label>
          category_id :
          <Input
            size="md"
            onChange={(ev) => handleChange(ev)}
            name="category_id"
            value={input.category_id}
          />
        </label>

        <label>
          price :
          <Input
            size="md"
            onChange={(ev) => handleChange(ev)}
            name="price"
            value={input.price}
          />
        </label>

        <label>
          type :
          <Input
            size="md"
            onChange={(ev) => handleChange(ev)}
            name="type"
            value={input.type}
          />
        </label>
        </VStack>


        <HStack>
          <Button>CREATE</Button>
          <Button onClick={handleCancel}>CANCEL</Button>
        </HStack>
        </form>
    )
}
