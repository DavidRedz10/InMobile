import React from "react";
import { Input } from '@chakra-ui/react'

export const InputBox = ({ label, setAttribute }) => {
  return (
    <div className="label-input-pair">
      <label >{label}</label>
      <Input
        placeholder="Descripcion"
        width='auto'
        variant='filled'
        onChange={(e) => setAttribute(e.target.value)}
      />
    </div>
  );
};