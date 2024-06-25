import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function LoginForm() {
  return (
    <div>
      <form>
        <FieldSet label={"Email Address"}>
          <Field label={"Email"}>
            <input
              className="p-2 border box-border w-[300px] rounded-md border-gray-300"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
        </FieldSet>
      </form>
    </div>
  );
}
