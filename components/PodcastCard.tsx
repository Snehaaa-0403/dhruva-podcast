import Image from "next/image";

type Props = {
  index: string;
  image: string;
};

export default function PodcastCard({ index, image }: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xl font-bold">{index}</span>

      <Image
        src={image}
        alt="podcast"
        width={60}
        height={60}
        className="rounded-lg"
      />

      <div>
        <p className="font-semibold">PODCAST NAME</p>
        <p className="text-xs text-gray-400">#HASHTAG</p>
      </div>
    </div>
  );
}
