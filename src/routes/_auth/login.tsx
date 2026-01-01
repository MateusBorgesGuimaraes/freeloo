import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema, type LoginSchemaData } from "@/schemas/login-schema";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<LoginSchemaData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const setUser = useAuthStore((s) => s.setUser);
  const registerMutation = useMutation({
    mutationFn: loginUser,

    onSuccess(data) {
      setUser(data.user);

      navigate({ to: "/" });
    },

    onError(error: Error) {
      toast.error(error.message);
    },
  });

  function onSubmit(values: LoginSchemaData) {
    registerMutation.mutate(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-foreground/60 text-sm">
            Sign in to your account to continue
          </p>
        </div>

        <div className="bg-background border border-foreground/10 rounded-2xl p-8 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="h-11 bg-background border-foreground/10 focus:border-primary transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"password"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="h-11 bg-background border-foreground/10 focus:border-primary transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary-hover text-primary-foreground font-medium rounded-lg transition-colors"
              >
                Sign in
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-foreground/60 mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
