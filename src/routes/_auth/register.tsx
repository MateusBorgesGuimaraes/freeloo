import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  registerSchema,
  type RegisterSchemaData,
} from "@/schemas/register-schema";
import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "@/stores/auth.store";

export const Route = createFileRoute("/_auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<RegisterSchemaData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const setUser = useAuthStore((s) => s.setUser);
  const registerMutation = useMutation({
    mutationFn: registerUser,

    onSuccess(data) {
      setUser(data.user);

      navigate({ to: "/" });
    },

    onError(error: Error) {
      toast.error(error.message);
    },
  });

  function onSubmit(values: RegisterSchemaData) {
    registerMutation.mutate(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Create account
          </h1>
          <p className="text-foreground/60 text-sm">
            Join us and start your journey today
          </p>
        </div>

        <div className="bg-background border border-foreground/10 rounded-2xl p-8 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
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
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
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
                        placeholder="Create a strong password"
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
                className="w-full h-11 bg-primary hover:bg-primary-hover text-primary-foreground font-medium rounded-lg transition-colors mt-6"
              >
                Create account
              </Button>
            </form>
          </Form>

          <p className="text-xs text-foreground/50 text-center mt-6">
            By creating an account, you agree to our{" "}
            <a
              href="#"
              className="text-primary hover:text-primary-hover transition-colors"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-primary hover:text-primary-hover transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>

        <p className="text-center text-sm text-foreground/60 mt-6">
          Already have an account?{" "}
          <a
            href="login"
            className="text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
