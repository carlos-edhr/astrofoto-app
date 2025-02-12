// import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";
// import { withAuth } from "@/components/auth/with-auth";
import { currentUser } from "@/lib/auth";
import { Stream } from "@prisma/client";

interface CustomUser {
  id: string;
  username: string;
  bio: string;
  image: string;
  stream: Stream;
  // Add other properties as needed
}

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const user = (await currentUser()) as CustomUser;
  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }

  // if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
  //   throw new Error("Unauthorized");
  // }
  if (!user) {
    throw new Error("Unauthorized");
  }
  console.log(user);
  return (
    <div className="h-full ">
      <p>Protected route: VIDEO DASHBOARD</p>
      <StreamPlayer user={user} stream={user.stream} />
    </div>
  );
};

export default CreatorPage;
