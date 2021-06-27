import React from "react";

function Usercard({ name, address, website, company }) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Website: {website}</div>
      <div>Company: {company.name}</div>
      <div>City: {address.city}</div>
      <hr />
    </div>
  );
}

export default Usercard;
