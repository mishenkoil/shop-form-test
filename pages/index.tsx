import DefaultLayout from "@/layouts/default";
import {
  Input,
  Select,
  SelectItem,
  Radio,
  RadioGroup,
  Divider,
  Button,
  Card,
  Image,
} from "@nextui-org/react";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Card radius="lg" className="relative border-none bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="z-10 text-white text-center font-black text-[24px] leading-[28px] md:text-[48px] md:leading-[54px]">
            Buy Followers, Likes and
            <br /> Reactions on Twitter or
            <br /> Telegram
          </div>
        </div>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover ml-[23px] max-w-[715px]"
          src="line.svg"
        />
      </Card>

      <div className="flex flex-col justify-center gap-5 pt-[60px] pb-[200px] md:py-[100px] max-w-[600px] mx-auto">
        <h1 className="mx-auto font-black text-[20px] leading-[26px] md:text-[24px] md:leading-[34px]">
          Create task
        </h1>

        <Divider className="my-2.5 md:my-5" />

        <Select
          variant="bordered"
          label="Social network"
          labelPlacement="outside"
          placeholder="-"
        >
          {[
            { key: "telegram", label: "Telegram" },
            { key: "twitter", label: "Twitter" },
          ].map((choice) => (
            <SelectItem key={choice.key}>{choice.label}</SelectItem>
          ))}
        </Select>
        <Select
          variant="bordered"
          label="Type of services"
          labelPlacement="outside"
          placeholder="-"
        >
          {[
            { key: "followers", label: "Followers" },
            { key: "reactions", label: "Reactions" },
            { key: "views", label: "Views" },
          ].map((choice) => (
            <SelectItem key={choice.key}>{choice.label}</SelectItem>
          ))}
        </Select>
        <Input
          variant="bordered"
          label="Channel"
          labelPlacement="outside"
          placeholder="https://t.me/channel"
          description="Provide a link to an open channel or group older than 14 days"
        />
        <Input
          variant="bordered"
          label="Number of subscribers"
          labelPlacement="outside"
          placeholder="1000"
          description="Limit 1-1000"
        />

        <RadioGroup label="Choose your payment method">
          <Radio value="card">card</Radio>
          <Radio value="cash">cash</Radio>
        </RadioGroup>

        <Button color="default">Create task</Button>
      </div>
    </DefaultLayout>
  );
}
