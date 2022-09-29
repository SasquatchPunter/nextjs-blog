import Image from "next/image";

function ProfilePic() {
  return (
    <Image src="/images/goof.jpg" width={512} height={512} alt="What a goof." />
  );
}

export default ProfilePic;
