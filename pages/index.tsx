import { FormCard } from "@/components/FormCard";
import { TelegramIcom, TwitterIcon } from "@/components/icons";
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
import { useState } from "react";

const SOCIAL_NETWORK_CHOICES = [
  { key: "telegram", label: "Telegram", logo: <TelegramIcom /> },
  { key: "twitter", label: "Twitter", logo: <TwitterIcon /> },
];

const ITEMS_TO_SELL = [
  { key: "followers", label: "Followers", associated: ["telegram", "twitter"] },
  { key: "reactions", label: "Reactions", associated: ["telegram"] },
  { key: "views", label: "Views", associated: ["telegram"] },
  { key: "likes", label: "Likes", associated: ["twitter"] },
];

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function IndexPage() {
  const [chosenSocial, setChosenSocial] = useState("");
  const [chosenItemToSell, setChosenItemToSell] = useState("");
  const [chosenPaymentType, setChosenPaymentType] = useState("");
  let filteredItemsToSell = ITEMS_TO_SELL.filter((item) =>
    item.associated.includes(chosenSocial)
  );

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
          classNames={{ label: "font-bold text-[16px] leading-[24px]" }}
          variant="bordered"
          label="Social network"
          labelPlacement="outside"
          placeholder="Ex. Telegram"
          onChange={(event) => {
            setChosenSocial(event.target.value);
            setChosenItemToSell("");
          }}
          renderValue={(items) =>
            items.map((item) => {
              const chosenSocialNetwork = SOCIAL_NETWORK_CHOICES.find(
                (socialNetwork) => socialNetwork.key === item.key
              );

              return (
                <div key={item.key} className="flex flex-row gap-[10px]">
                  <div className="inline-block">
                    {chosenSocialNetwork?.logo}
                  </div>
                  <div>{chosenSocialNetwork?.label}</div>
                </div>
              );
            })
          }
        >
          {SOCIAL_NETWORK_CHOICES.map((choice) => (
            <SelectItem key={choice.key} startContent={choice.logo}>
              {choice.label}
            </SelectItem>
          ))}
        </Select>

        <Select
          classNames={{ label: "font-bold text-[16px] leading-[24px]" }}
          variant="bordered"
          label="Type of services"
          labelPlacement="outside"
          placeholder="Ex. Followers"
          isDisabled={filteredItemsToSell.length === 0}
          value={chosenItemToSell}
          onChange={(event) => setChosenItemToSell(event.target.value)}
        >
          {filteredItemsToSell.map((choice) => (
            <SelectItem key={choice.key}>{choice.label}</SelectItem>
          ))}
        </Select>

        <Input
          classNames={{ label: "font-bold text-[16px] leading-[24px]" }}
          variant="bordered"
          label="Channel"
          labelPlacement="outside"
          isRequired
          placeholder="https://t.me/channel"
          description="Provide a link to an open channel or group older than 14 days"
        />

        <Input
          classNames={{ label: "font-bold text-[16px] leading-[24px]" }}
          variant="bordered"
          label="Number of subscribers"
          labelPlacement="outside"
          isRequired
          placeholder="1000"
          description="Limit 1-1000"
        />

        <RadioGroup
          id="PaymentRadio"
          classNames={{
            label: "text-black font-bold text-[16px] leading-[24px]",
            wrapper: "gap-3 flex-col sm:flex-row",
          }}
          label="Choose your payment method"
          onValueChange={setChosenPaymentType}
        >
          <Radio value="card">
            <FormCard
              title="Card"
              info="Visa, Mastercard"
              chosen={chosenPaymentType === "card"}
              icon={<img src="/shop-form-test/card.png" alt="card" />}
            />
          </Radio>
          <Radio value="cash">
            <FormCard
              title="Cash"
              info="USD, EUR, RUB"
              chosen={chosenPaymentType === "cash"}
              icon={<img src="/shop-form-test/cash.png" alt="cash" />}
            />
          </Radio>
        </RadioGroup>

        <Button className="bg-black" color="default">
          <span className="text-white font-bold text-[16px] leading-[24px]">
            Create task
          </span>
        </Button>
      </div>
    </DefaultLayout>
  );
}
