import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Car,
  Phone,
  Mail,
  ArrowLeft,
  Star,
} from "lucide-react";
import { properties } from "@/data/properties";
import Link from "next/link";
import ImageGallery from "./ImageGallery";

// interface PropertyDetailPageProps {
//   params: {
//     id: string;
//   };
// }

export default async function PropertyDetailPage({
  params,
}: {params: Promise<{id: string}>}) {
  const { id } = await params;

  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/properties"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Link>
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.address}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <ImageGallery property={property} />

            {/* Property Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">
                    {formatPrice(property.price)}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.8</span>
                    <span className="text-gray-600">(24 reviews)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Bed className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Bath className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Square className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">
                      {property.area.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Car className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">
                      {property.parking || 0}
                    </div>
                    <div className="text-sm text-gray-600">Parking</div>
                  </div>
                </div>

                {/* Property Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Property Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                  <div>
                    <h4 className="font-semibold mb-2">Property Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="capitalize">{property.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="capitalize">
                          {property.status.replace("-", " ")}
                        </span>
                      </div>
                      {property.yearBuilt && (
                        <div className="flex justify-between">
                          <span>Year Built:</span>
                          <span>{property.yearBuilt}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Area:</span>
                        <span>{property.area.toLocaleString()} sq ft</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Neighborhood:</span>
                        <span>{property.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Address:</span>
                        <span className="text-right">{property.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" />
                </div>
                <div>
                  <Input placeholder="Your Phone" type="tel" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    defaultValue={`Hi, I'm interested in ${
                      property.title
                    } at ${formatPrice(
                      property.price
                    )}. Please contact me with more information.`}
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Agent Info */}
            <Card>
              <CardHeader>
                <CardTitle>Property Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-600">
                      Senior Real Estate Agent
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-gray-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-gray-600" />
                    <span>john.doe@realestate.com</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Agent
                </Button>
              </CardContent>
            </Card>

            {/* Similar Properties */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {properties
                    .filter(
                      (p) =>
                        p.id !== property.id && p.location === property.location
                    )
                    .slice(0, 3)
                    .map((similarProperty) => (
                      <Link
                        key={similarProperty.id}
                        href={`/properties/${similarProperty.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={similarProperty.images[0]}
                              alt={similarProperty.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                              {similarProperty.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {similarProperty.location}
                            </p>
                            <p className="text-sm font-semibold text-primary">
                              {formatPrice(similarProperty.price)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
