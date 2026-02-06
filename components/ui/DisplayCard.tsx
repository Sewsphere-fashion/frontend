import { IconType } from "react-icons";

type DisplayCardProps = {
  title: string;
  desc: string;
  Icon: IconType;
};

export function DisplayCard({ title, desc, Icon }: DisplayCardProps) {
  return (
    <div className="bg-white border p-6 rounded-lg hover:text-white hover:bg-gradient-to-b hover:from-[#C76B4A] hover:to-[#EB9D80] shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition-colors ease-in duration-100 group">
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary group-hover:bg-white">
          <Icon className="h-5 w-5 text-white group-hover:text-brand" />
        </div>

        <h3 className="font-medium text-sm leading-snug">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white">
        {desc}
      </p>
    </div>
  );
}
