import React from "react";
import WebDesignLanding from "../components/webDesignService/webDesignLanding";
import BenefitsWebDesign from "../components/webDesignService/benefitsWebDesign";
import ExpertWebDesign from "../components/webDesignService/expertWebDesign";
import WebDesignProcess from "../components/webDesignService/webDesignProcess";
import WebDesign from "../components/webDesignService/webDesign";

const page = () => {
  return (
    <div>
      <WebDesignLanding />
      <BenefitsWebDesign />
      <WebDesign />
      <WebDesignProcess />
      <ExpertWebDesign />
    </div>
  );
};

export default page;
