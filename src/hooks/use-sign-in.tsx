import { auth } from "@/lib/auth";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const signInSchema = z.object({
  email: z.email({ error: "Insira um e-mail válido." }),
  password: z
    .string({ error: "A senha é obrigatória." })
    .min(8, { error: "A senha deve conter ao menos 8 caracteres." }),
});

type SignInProps = z.infer<typeof signInSchema>;

export function useSignIn() {
  const form = useForm<SignInProps>({
    resolver: standardSchemaResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInProps> = async (values) => {
    await auth.signIn.email(
      {
        ...values,
        callbackURL: import.meta.env.VITE_FRONTEND_BASE_URL,
      },
      {
        onError(context) {
          if (context.error.message) {
            alert(context.error.message);
          } else {
            alert("Falha no processo de login");
          }
        },
      },
    );
  };

  const onSignInWithGoogle = async () => {
    await auth.signIn.social(
      {
        provider: "google",
      },
      {
        onError(context) {
          if (context.error.message) {
            alert(context.error.message);
          } else {
            alert("Falha no processo de login");
          }
        },
      },
    );
  };

  return {
    form,
    onSubmit,
    onSignInWithGoogle,
  };
}
