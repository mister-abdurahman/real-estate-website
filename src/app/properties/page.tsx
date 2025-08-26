'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter, Grid, List, Search } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import PropertyFilters from '@/components/properties/PropertyFilters';
import { properties } from '@/data/properties';
import { PropertyFilters as PropertyFiltersType } from '@/types/property';

export default function PropertiesPage() {
  const [filters, setFilters] = useState<PropertyFiltersType>({
    location: '',
    minPrice: 0,
    maxPrice: 2000000,
    type: '',
    bedrooms: 0,
    bathrooms: 0,
    status: '',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Location filter
      if (filters.location && filters.location !== 'all' && property.location !== filters.location) {
        return false;
      }

      // Price filter
      if (property.price < filters.minPrice || property.price > filters.maxPrice) {
        return false;
      }

      // Type filter
      if (filters.type && filters.type !== 'all' && property.type !== filters.type) {
        return false;
      }

      // Status filter
      if (filters.status && filters.status !== 'all' && property.status !== filters.status) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
        return false;
      }

      // Bathrooms filter
      if (filters.bathrooms > 0 && property.bathrooms < filters.bathrooms) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      location: '',
      minPrice: 0,
      maxPrice: 2000000,
      type: '',
      bedrooms: 0,
      bathrooms: 0,
      status: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== '' && value !== 0 && value !== 'all'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Properties</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our extensive collection of properties for sale and rent. 
              Use our advanced filters to find your perfect match.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-80">
            <PropertyFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {filteredProperties.length} properties found
                  </span>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-red-600 hover:text-red-700"
                    >
                      Clear all filters
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* Mobile Filters */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <PropertyFilters
                        filters={filters}
                        onFiltersChange={setFilters}
                        onClearFilters={clearFilters}
                      />
                    </SheetContent>
                  </Sheet>

                  {/* View Mode Toggle */}
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to find more properties
                </p>
                <Button onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {filteredProperties.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Properties
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 