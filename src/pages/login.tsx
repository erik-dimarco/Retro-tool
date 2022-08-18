import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "@/schema/user.schema";
import { trpc } from "@/utils/trpc";

const Login = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  // const { mutate, error } = trpc.useMutation(["user.registerUser"], {
  //   onError: (error) => {
  //     console.error(error);
  //   },
  //   onSuccess: () => {
  //     router.push("/login");
  //   },
  // });

  const onSubmit = (values: CreateUserInput) => {
    // mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {error && <p>{error.message}</p>} */}
        <h1>Register</h1>
        <input
          type="email"
          placeholder="john.smith@example.com"
          {...register("email")}
        />
        <input type="text" placeholder="John" {...register("name")} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Login;
