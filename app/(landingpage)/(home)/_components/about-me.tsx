"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust the path if needed
import { Button } from "@/components/ui/button"; // Example usage from shadcn/ui
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"; // Optional avatar

interface AboutMeProps {
  name: string;
  role: string;
  avatarUrl?: string;
  aboutText: string;
}

/**
 * A reusable About Me card component.
 * 
 * Props:
 * - name: The user's name.
 * - role: A short title or role.
 * - avatarUrl: An optional URL for the user's avatar or profile image.
 * - aboutText: The main description or bio text.
 */
export function AboutMe({
  name,
  role,
  avatarUrl,
  aboutText,
}: AboutMeProps) {
  return (
    <Card className="mx-auto w-full max-w-md rounded-lg shadow-sm">
      {/* Card Header */}
      <CardHeader className="flex items-center gap-4 pb-0">
        <Avatar className="h-16 w-16">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={`${name}'s avatar`} />
          ) : (
            <AvatarFallback>ME</AvatarFallback>
          )}
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold leading-tight">
            {name}
          </CardTitle>
          <CardDescription className="mt-1 text-sm text-gray-500">
            {role}
          </CardDescription>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="mt-4 space-y-4">
        <p className="text-sm leading-relaxed text-gray-700">
          {aboutText}
        </p>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="flex flex-col items-start gap-2">
        <Button variant="default">Contact</Button>
      </CardFooter>
    </Card>
  );
}
