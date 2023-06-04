import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ComponentInformation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default ComponentInformation;
