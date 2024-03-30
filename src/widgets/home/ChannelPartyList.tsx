"use client";

import { useAuthUserQuery } from "@/feature/auth/api/query";
import { usePartiesQuery } from "@/feature/party/api/queries";
import { PartyList } from "@/feature/party/components/PartyList";

export const ChannelPartyList = () => {
  const user = useAuthUserQuery();

  const parties = usePartiesQuery(user.channelId);

  return <PartyList parties={parties} />;
};
