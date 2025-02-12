import { Button } from "@/components/ui/button";
import { UrlCard } from "./_components/url-card";
import { getStreamByUserId } from "@/lib/stream-service";
import { KeyCard } from "./_components/key-card";
import ConnectModal from "./_components/connect-modal";
import { currentUser } from "@/lib/auth";

const KeysPage = async () => {
  const self = await currentUser();

  if (!self || !self.id) {
    throw new Error("User not found or user ID is undefined");
  }

  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        <ConnectModal />
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default KeysPage;
