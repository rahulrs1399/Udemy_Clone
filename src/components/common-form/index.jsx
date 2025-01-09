import { Button } from "../ui/button";
import FormControls from "./form-controls";

function CommonForm({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  handleSubmit = (e) => e.preventDefault(),
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit}>

      {/* render form control here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />

      <Button disable={isButtonDisabled} type="submit" className="mt-5 w-full">
        {buttonText || "submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
