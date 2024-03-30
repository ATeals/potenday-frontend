"use client";

import { channelAPI } from "@/feature/channel/api";
import { Axios } from "@/feature/common/api";
import { Flex } from "@UI/Flex";
import { register } from "module";
import { useForm } from "react-hook-form";

interface ChannelJoinForm {
  channelName: string;
  password?: string;
  maxUserAmount?: number;
  isPrivate?: boolean;
}

const ChannelJoinPage = () => {
  const { register, watch, handleSubmit } = useForm<ChannelJoinForm>();

  return (
    <Flex className="w-full h-full" style={{ direction: "column" }}>
      <h1>Join Channel</h1>
      <form onSubmit={handleSubmit((data) => channelAPI.create(data))}>
        <Flex className="w-full h-full" style={{ direction: "column" }}>
          <label>
            체널이름
            <input {...register("channelName", { required: true })} />
          </label>

          <label>
            비밀번호
            <input {...register("password")} />
          </label>

          <label>
            최대 인원
            <input type="number" {...register("maxUserAmount")} />
          </label>

          <label>
            비공개
            <input type="checkbox" {...register("isPrivate")} />
          </label>

          <button type="submit">Join</button>
        </Flex>
      </form>
    </Flex>
  );
};

export default ChannelJoinPage;
