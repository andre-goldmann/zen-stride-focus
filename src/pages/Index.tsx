import { useState } from "react";
import { DashboardCard } from "@/components/DashboardCard";
import { TaskSection } from "@/components/TaskSection";
import { WorkoutSection } from "@/components/WorkoutSection";
import { MeditationSection } from "@/components/MeditationSection";
import { Button } from "@/components/ui/button";
import { CheckCircle, Dumbbell, Brain, User, Menu } from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";

type ActiveSection = 'dashboard' | 'tasks' | 'workouts' | 'meditation';

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');

  const navigationItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: User },
    { id: 'tasks' as const, label: 'Tasks', icon: CheckCircle },
    { id: 'workouts' as const, label: 'Workouts', icon: Dumbbell },
    { id: 'meditation' as const, label: 'Meditation', icon: Brain },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'tasks':
        return <TaskSection />;
      case 'workouts':
        return <WorkoutSection />;
      case 'meditation':
        return <MeditationSection />;
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-white">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={wellnessHero} 
                  alt="Wellness journey" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Wellness Journey
                </h1>
                <p className="text-xl opacity-90 mb-6 max-w-2xl">
                  Achieve balance through mindful productivity, energizing workouts, and peaceful meditation
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => setActiveSection('tasks')}
                  >
                    Start Tasks
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => setActiveSection('meditation')}
                  >
                    Meditate Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-wellness text-white">
                <h3 className="text-3xl font-bold">85%</h3>
                <p className="opacity-90">Daily Goals</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-energy text-white">
                <h3 className="text-3xl font-bold">7</h3>
                <p className="opacity-90">Day Streak</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-mindful text-white">
                <h3 className="text-3xl font-bold">42</h3>
                <p className="opacity-90">Minutes Today</p>
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <DashboardCard
                title="Daily Tasks"
                description="Manage your productivity and habits"
                icon={CheckCircle}
                buttonText="View Tasks"
                onAction={() => setActiveSection('tasks')}
                gradient="bg-gradient-wellness"
                stats={{ label: "completed today", value: "6/8" }}
              />
              
              <DashboardCard
                title="Fitness"
                description="Track workouts and stay active"
                icon={Dumbbell}
                buttonText="Start Workout"
                onAction={() => setActiveSection('workouts')}
                gradient="bg-gradient-energy"
                stats={{ label: "calories burned", value: "450" }}
              />
              
              <DashboardCard
                title="Mindfulness"
                description="Practice meditation and reflection"
                icon={Brain}
                buttonText="Meditate"
                onAction={() => setActiveSection('meditation')}
                gradient="bg-gradient-mindful"
                stats={{ label: "minutes today", value: "15" }}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-wellness text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Wellness Hub
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
            
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
