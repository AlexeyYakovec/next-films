"use client";

import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

interface Props {
    className?: string;
}

const formSchema = z.object({
    input: z.string().min(2).max(30),
});

export const SearchInput: React.FC<Props> = ({ className }) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        router.push(`/search/${values.input}`);
        form.reset();
    };

    return (
        <div className={cn("", className)}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2">
                    <FormField
                        control={form.control}
                        name="input"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Search ..."
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    );
};
