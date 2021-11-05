import { Container, Heading, VStack, Box, Checkbox, Button, Input} from '@chakra-ui/react';
import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { createNewUser } from "../../../../../../utils";


export const CreateUser = () => {
    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
      });
      
    
      const [check, setCheck] = useState(false);
      const [errors, setErrors] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };
    
      const history = useHistory();
    
      const addUser = async (e) => {
        e.preventDefault();
        const RESP = await createNewUser(input);
        console.log(RESP);
        if (RESP.success) {
          history.push("/dashboard/user");
        } else {
          setErrors(RESP.errors);
          console.log('errors', errors);
        }
      };

      const handleCancel = () => {
        history.push("/dashboard/user");
      };


      
    return (
        <Container>
          <Heading>Add new User</Heading>
          <form on onSubmit={(ev)=>addUser(ev)}>

          <label className="w-32 text-right">First Name :
          <Input
            size="md"
            type="text"
            name="first_name"
            
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

          <label className="w-32 text-right">Password:
          <Input
            size="md"
            type="password"
            name="password"
            value={input.password}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
          />
          </label>

          <label className="w-32 text-right">Confirm Password:
          <Input
            size="md"
            type="password"
            name="password_confirmation"
            value={input.password_confirmation}
            required
            onChange={(ev) => handleChange(ev)}
            autoComplete="off"
          />
          </label>

          <VStack>
            <Box>Terms and Conditions agreement</Box>
            <Checkbox size="md" colorScheme="orange" onChange={(e) => {setCheck(e.target.checked)}}>
                  I agree to Tnafos
            </Checkbox>
            <Link to="#" className="text-blue-700 hover:underline">terms of service</Link> and 
            <Link className="text-blue-700 hover:underline">Privacy policy</Link>

            <Box>Decleration of Valid Information</Box>
            <Checkbox onChange={(e) => {setCheck(e.target.checked)}}>I confirm that the information given in this form is true,
                complete and accurate.</Checkbox>
          </VStack>

          <Button>SAVE</Button>
          <Button onClick={handleCancel}>CANCEL</Button>
          </form>
        </Container>
    )
}
