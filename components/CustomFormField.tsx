import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CustomProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}
const CustomFormField = (props: CustomProps) => {
  const { control, name, label, placeholder } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            <Image
              width={24}
              height={24}
              src={"/assets/icons/user.svg"}
              alt="icon"
            />
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
