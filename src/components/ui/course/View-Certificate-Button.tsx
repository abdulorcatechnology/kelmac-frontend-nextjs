import React from "react";
import Button from "@/components/ui/button/Button";
import { IconArrowRight } from "@/components/icons/icons";

const ViewCertificateButton = () => {
  return (
    <>
      {/* Certificate page doesnt exist */}
      <Button
        spanclassName="px-4"
        href="/course"
        text="View Certificate"
        color="primary"
        icon={<IconArrowRight className="text-primary" />}
      />
    </>
  );
};

export default ViewCertificateButton;
