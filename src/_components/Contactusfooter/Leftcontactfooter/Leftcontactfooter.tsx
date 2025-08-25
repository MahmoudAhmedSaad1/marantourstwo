import React from "react";
import Headingandpharagraphcontactfooter from "../Headingandpharagraphcontactfooter/Headingandpharagraphcontactfooter";
import Emailcontactfooter from "../Emailcontactfooter/Emailcontactfooter";
import Phonecontactfooter from "../Phonecontactfooter/Phonecontactfooter";
import Locationcontactfooter from "../Locationcontactfooter/Locationcontactfooter";
import Socialscontactfooter from "../Socialscontactfooter/Socialscontactfooter";
export default function Leftcontactfooter() {
  return (
    <div>
      <Headingandpharagraphcontactfooter />
      <Emailcontactfooter />
      <Phonecontactfooter />
      <Locationcontactfooter />
      <Socialscontactfooter />
    </div>
  );
}
