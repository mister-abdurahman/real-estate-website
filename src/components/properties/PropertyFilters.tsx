'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, X, Search } from 'lucide-react';
import type { PropertyFilters } from '@/types/property';
import { locations, propertyTypes, statuses } from '@/data/properties';

interface PropertyFiltersProps {
  filters: PropertyFilters;
  onFiltersChange: (filters: PropertyFilters) => void;
  onClearFilters: () => void;
}

export default function PropertyFilters({ filters, onFiltersChange, onClearFilters }: PropertyFiltersProps) {
  // const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof PropertyFilters, value: string | number) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== '' && value !== 0 && value !== 'all'
  );

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-red-600 hover:text-red-700"
            >
              <X className="h-4 w-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search properties..."
              className="pl-10"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Property Type</label>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Status</label>
          <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status.replace('-', ' ').toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <label className="text-sm font-medium">Price Range</label>
          <div className="space-y-4">
            <Slider
              value={[filters.minPrice, filters.maxPrice]}
              onValueChange={(value) => {
                handleFilterChange('minPrice', value[0]);
                handleFilterChange('maxPrice', value[1]);
              }}
              max={2000000}
              min={0}
              step={10000}
              className="w-full"
            />
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value) || 0)}
                className="flex-1"
              />
              <Input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value) || 2000000)}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Bedrooms</label>
          <Select value={filters.bedrooms.toString()} onValueChange={(value) => handleFilterChange('bedrooms', parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Any bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Bathrooms</label>
          <Select value={filters.bathrooms.toString()} onValueChange={(value) => handleFilterChange('bathrooms', parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Any bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Active Filters:</h4>
            <div className="flex flex-wrap gap-2">
              {filters.location && filters.location !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  Location: {filters.location}
                </Badge>
              )}
              {filters.type && filters.type !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  Type: {filters.type}
                </Badge>
              )}
              {filters.status && filters.status !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  Status: {filters.status}
                </Badge>
              )}
              {filters.bedrooms > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {filters.bedrooms}+ Bedrooms
                </Badge>
              )}
              {filters.bathrooms > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {filters.bathrooms}+ Bathrooms
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 