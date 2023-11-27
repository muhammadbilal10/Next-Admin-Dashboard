"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNo: z
    .string()
    .regex(/[1-9][0-9]{9}/, {
      message: "Phone number cannot start with 0.",
    })
    .length(10, { message: "PhoneNo must be 10 digits long." })
    .trim(),
  houseNo: z.string().min(1, {
    message: "HosuseNo must be at least 1 digit.",
  }),
  mb: z.string().min(1, {
    message: "Mb must be at least 1 digit.",
  }),
  area: z.string().min(1, {
    message: "area must be at least 1 digit.",
  }),

  bill: z.coerce.number().gte(0, {
    message: "area must be at least 1 digit.",
  }),
});

// interface UserFormProps {
//   showModel: boolean;
//   handleCloseModel: () => void;
// }

export function UserForm() {
  const { toast } = useToast();
  const now = new Date();
  const locale = "en-US";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as const;

  const formatted = now.toLocaleString(locale, options);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNo: "",
      houseNo: "",
      mb: "",
      area: "",
      bill: undefined,
    },
  });

  const { reset } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "User: Added Successfully ",
      description: formatted,
      // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
    console.log(values);
  }

  return (
    <Card className={``}>
      <CardHeader>
        <CardTitle>Add user</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FirstName</FormLabel>
                  <FormControl>
                    <Input placeholder="firstName" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LastName</FormLabel>
                  <FormControl>
                    <Input placeholder="lastName" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PhoneNo</FormLabel>
                  <FormControl>
                    <Input placeholder="phoneNo" type="tel" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="houseNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HouseNo</FormLabel>
                  <FormControl>
                    <Input placeholder="houseNo" type="number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mb"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MB</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Internet mb connection"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="area in sqft"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <Input placeholder="Fee" type="number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="sm:col-span-2 flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/user"> Cancel</Link>
              </Button>
              <Button type="submit" className=" w-24">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
