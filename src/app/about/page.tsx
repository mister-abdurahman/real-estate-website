import { Award, Users, Home, Shield, Target, Heart, Star, TrendingUp, Building2, MapPin, Phone, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BlueInk Homes</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re more than just a real estate company. We&apos;re your trusted partner in finding the perfect place to call home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Story */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2003, RealEstate has been helping families find their dream homes for over two decades. 
            What started as a small local agency has grown into one of the most trusted names in real estate, 
            serving thousands of satisfied clients across the region.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Our mission is simple: to make the home buying and selling process as smooth and enjoyable as possible. 
            We believe everyone deserves to find their perfect home, and we&apos;re committed to making that dream a reality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2,500+</h3>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1,800+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9/5</h3>
            <p className="text-gray-600">Client Rating</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-First Approach</h3>
              <p className="text-gray-600">
                Your needs come first. We listen, understand, and work tirelessly to exceed your expectations 
                in every transaction.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Integrity</h3>
              <p className="text-gray-600">
                We build lasting relationships based on honesty, transparency, and unwavering ethical standards 
                in all our dealings.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from market knowledge to customer 
                support and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 25 years in real estate, John leads our company with vision and expertise. 
                His passion for helping families find their perfect homes drives everything we do.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Johnson</h3>
              <p className="text-blue-600 font-medium mb-4">Lead Real Estate Agent</p>
              <p className="text-gray-600 text-sm">
                Maria specializes in residential properties and has helped hundreds of families find their 
                dream homes. Her attention to detail is unmatched.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">DW</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Wilson</h3>
              <p className="text-blue-600 font-medium mb-4">Investment Specialist</p>
              <p className="text-gray-600 text-sm">
                David focuses on investment properties and commercial real estate. His market insights 
                help clients make informed investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Awards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Best Real Estate Agency 2023</h3>
                <p className="text-blue-100">Local Business Awards</p>
              </div>
              
              <div className="flex flex-col items-center">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Top 10% Performance</h3>
                <p className="text-blue-100">National Real Estate Association</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Star className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
                <p className="text-blue-100">Customer Satisfaction Awards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Visit Our Office</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Main Office</h4>
                    <p className="text-gray-600">123 Real Estate Blvd, Suite 100</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@realestate.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Office Location</p>
                <p className="text-sm">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
