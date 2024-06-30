import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function LoginForm() {
  // login form function useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (fromData) => {
    console.log(fromData);
    //Login user
    const user = { email: "x@example.com", password: "123456789" };

    const found =
      fromData.email === user.email && fromData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `User with email '${fromData.email}' is not found `,
        type: "ramdom",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label={"Email Address"}>
          <Field label={"Email"} error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label={"Password"} error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Passwords"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white cursor-p p-1 border rounded-lg  bg-purple-500 m-auto">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
