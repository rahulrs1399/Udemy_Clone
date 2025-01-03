import { Button } from "../ui/button";
import FormControl from "./form-controls";

function CommonForm({ handleSubmit, buttonText, formControl = [], formData, setFormData }) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form control here */}
      <FormControl formControl={formControl} formData={formData} setFormData={setFormData}/>

      <Button type="submit">{buttonText || "submit"}</Button>
    </form>
  );
}

export default CommonForm;
