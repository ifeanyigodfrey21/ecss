import React from "react";
import logo from "../assets/AboutPage/Logo.png";
import {
  LayoutDashboard,
  Book,
  Users,
  ClipboardList,
  Award,
  FolderOpen,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// Navigation items moved outside component to prevent recreation on each render
const NAV_ITEMS = [
  { icon: LayoutDashboard, text: "Dashboard", active: true },
  { icon: Book, text: "Courses" },
  { icon: Users, text: "Workshop" },
  { icon: ClipboardList, text: "Assignment" },
  { icon: Award, text: "Certification" },
  { icon: FolderOpen, text: "Resources" },
  { icon: MessageSquare, text: "Messages" },
  { icon: Settings, text: "Settings" },
];

// Stats data moved outside to prevent recreation
const STATS_DATA = [
  { title: "Enrolled course", count: 2, color: "text-yellow-500" },
  { title: "Workshop", count: 3, color: "text-blue-600" },
  { title: "Certificates", count: 2, color: "text-yellow-500" },
];

// Course recommendations data
const RECOMMENDED_COURSES = [
  {
    title: "Peak Productivity Challenge",
    description:
      "A group coaching program on building sustainable self-discipline...",
  },
  {
    title: "Peak Performance Mastery",
    description: "Online course to 10x your focus and energy...",
  },
];

function Dashboardage() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Memoized sidebar component
  const Sidebar = React.memo(() => (
    <div
      className={`fixed lg:static inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white shadow-lg z-40`}
    >
      <div className="flex flex-col h-full p-6">
        <img src={logo} alt="ECSS Logo" className="w-24 mb-6" />
        <nav className="space-y-4 flex-grow">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                item.active
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.text}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Log out
        </a>
      </div>
    </div>
  ));

  const StatCard = React.memo(({ title, count, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className={`text-3xl font-bold ${color} mb-2`}>{count}</div>
      <div className="text-gray-600 mb-2">{title}</div>
      <a href="#" className="text-blue-600 hover:underline text-sm">
        View details
      </a>
    </div>
  ));

  const CourseCard = React.memo(({ title, description }) => (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <img
        src="/api/placeholder/100/100"
        alt="Course thumbnail"
        className="w-full md:w-24 h-24 rounded-lg object-cover"
      />
      <div>
        <div className="font-bold mb-2">{title}</div>
        <div className="text-gray-600 text-sm">
          {description}
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Learn more
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button with dynamic icon */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Panel */}
          <div className="w-full lg:w-2/3 p-6 overflow-y-auto">
            <div className="mb-6">
              <div className="text-xl text-gray-600">Welcome back</div>
              <div className="text-2xl font-bold text-blue-600">
                Sarah Ibeji
              </div>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search courses"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
              <Search className="absolute top-3 left-4 text-gray-400 w-5 h-5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {STATS_DATA.map((item, index) => (
                <StatCard key={index} {...item} />
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-bold">Recommended for you</div>
                <a href="#" className="text-blue-600 hover:underline">
                  See All
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RECOMMENDED_COURSES.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/3 bg-yellow-50 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-lg font-bold">Monday</div>
                <div className="text-gray-600">October 21, 2024</div>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <img
                  src="/api/placeholder/40/40"
                  alt="User profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-bold">My Progress</div>
                <div className="text-blue-600">Weekly</div>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src="/api/placeholder/100/100"
                  alt="Progress chart"
                  className="w-32 h-32"
                />
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="text-gray-600">Completed</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="text-gray-600">In Progress</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-bold">Assignments</div>
                <a href="#" className="text-blue-600 hover:underline">
                  See All
                </a>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="font-bold mb-1">
                        Peak Productivity (3 exercises)
                      </div>
                      <div className="text-gray-600 text-sm">Due in 9 days</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardage;
