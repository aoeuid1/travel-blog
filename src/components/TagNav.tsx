import { getUniqueTags } from "@/lib/posts";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export const TagNav: FC = () => {
  const tags = getUniqueTags();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Posts</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {tags.map((tag) => (
          <DropdownMenuItem key={tag}>
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
