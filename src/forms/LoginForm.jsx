import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function LoginForm() {
  // login form function useForm
  const { register, handleSubmit } = useForm();

  const submitForm = (fromData) => {
    console.log(fromData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label={"Email Address"}>
          <Field label={"Email"}>
            <input
              {...register("email")}
              className="p-2 border box-border w-[300px] rounded-md border-gray-300"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label={"Password"}>
            <input
              {...register("password")}
              className="p-2 border box-border w-[300px] rounded-md border-gray-300"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Passwords"
            />
          </Field>
        </FieldSet>
        <Field>
          <button className="text-md text-white cursor-p p-1 border rounded-lg  bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
