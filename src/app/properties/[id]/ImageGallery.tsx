"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Property } from "@/types/property";

interface ImageGalleryProps {
  property: Property;
}

function ImageGallery({ property }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "for-sale":
        return "bg-green-100 text-green-800";
      case "for-rent":
        return "bg-blue-100 text-blue-800";
      case "sold":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getStatusColor(property.status)}>
              {property.status.replace("-", " ").toUpperCase()}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 bg-white/80 hover:bg-white"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 bg-white/80 hover:bg-white"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {property.images.length > 1 && (
          <div className="p-4">
            <div className="flex gap-2 overflow-x-auto">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                    index === currentImageIndex ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ImageGallery;
