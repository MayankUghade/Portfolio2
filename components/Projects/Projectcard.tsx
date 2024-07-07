import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";

export default function ProjectCard({ data }: any) {
  return (
    <Card className="w-full sm:w-[39%] rounded-lg overflow-hidden shadow-lg h-[520px] flex flex-col">
      <img
        src={data.imageUrl}
        alt="Project Thumbnail"
        width={400}
        height={500}
        className="w-full h-50 object-cover"
      />
      <CardContent className="p-6 space-y-4 flex flex-col flex-grow justify-between">
        <div>
          <CardTitle className="text-xl font-semibold">{data.title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            {data.description}
          </CardDescription>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Technologies Used:</div>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag: any) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <Link
            href={data.githubLink}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href={data.liveLink}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGlobe className="w-4 h-4" />
            Live Demo
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
