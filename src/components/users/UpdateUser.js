import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUser, updateUserInfo } from "../../utils";
import {
  Button,
  Input,
  HStack
} from "@chakra-ui/react";

export const UpdateUser = () => {
  const { uuid } = useParams();
  const history = useHistory();

  const [input, setInput] = useState(null);
  // const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const fetchData = async () => {
    const Data = await getUser(uuid);
    if (Data.success) {
      setInput(Data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const resp = await updateUserInfo(uuid, input);
    if (resp.success) {
      history.push(`/dashboard/user`);
    } else {
      // setErrors(resp);
    }
  };

  const handleCancel = () => {
    history.push("/dashboard/user");
  };

  
    return (
        <>
        {
          input? (
            <form onSubmit={(ev)=>handleUpdate(ev)}>
              <label className="w-32 text-right">First Name :
              <Input
                size="md"
                type="text"
                name="first_name"
                value={input.first_name}
                required
                onChange={(ev) => handleChange(ev)}
                autoComplete="off"
                autoFocus="off"
              />
              </label>

              <label className="w-32 text-right">Last Name:
              <Input
                size="md"
                type="text"
                name="last_name"
                value={input.last_name}
                required
                onChange={(ev) => handleChange(ev)}
                autoComplete="off"
                autoFocus="off"
              />
              </label>

              <label className="w-32 text-right">Phone Number:
              <Input
                size="md"
                type="text"
                name="phone_number"
                value={input.phone_number}
                required
                onChange={(ev) => handleChange(ev)}
                autoComplete="off"
              />
              </label>

              <label className="w-32 text-right">Email:
              <Input
                size="md"
                type="email"
                name="email"
                value={input.email}
                required
                onChange={(ev) => handleChange(ev)}
                autoComplete="off"
                placeholder="info@company.com"
              />
              </label>
              <HStack>
                <Button>UPDATE</Button>
                <Button onClick={handleCancel}>CANCEL</Button>
              </HStack>
            </form>
          ):null
        }
        </>
    )
}
