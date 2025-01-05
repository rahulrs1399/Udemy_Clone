import { Button } from "../ui/button";
import FormControl from "./form-controls";

function CommonForm({ handleSubmit, buttonText, formControl = [], formData, setFormData, }) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form control here */}
      <FormControl formControl={formControl} formData={formData} setFormData={setFormData} />

      <Button type="submit" className="mt-5 w-full">{buttonText || "submit"}</Button>
    </form>
  );
}

export default CommonForm;
