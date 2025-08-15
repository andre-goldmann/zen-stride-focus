import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Play, Clock, Heart } from "lucide-react";

const sessions = [
  {
    id: "1",
    name: "Morning Mindfulness",
    duration: "10 min",
    type: "Guided Meditation",
    description: "Start your day with clarity and focus",
    completed: true,
    progress: 100
  },
  {
    id: "2",
    name: "Stress Relief",
    duration: "15 min",
    type: "Breathing Exercise",
    description: "Release tension and find inner calm",
    completed: false,
    progress: 0
  },
  {
    id: "3",
    name: "Sleep Preparation",
    duration: "20 min",
    type: "Body Scan",
    description: "Unwind and prepare for restful sleep",
    completed: false,
    progress: 0
  },
  {
    id: "4",
    name: "Focus Booster",
    duration: "5 min",
    type: "Quick Session",
    description: "Quick mental reset for productivity",
    completed: true,
    progress: 100
  }
];

export function MeditationSection() {
  const completedSessions = sessions.filter(s => s.completed).length;
  const totalMinutes = sessions.filter(s => s.completed).reduce((acc, s) => acc + parseInt(s.duration), 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-mindful text-white border-none">
          <CardContent className="p-4 text-center">
            <Brain className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{completedSessions}</div>
            <div className="text-sm opacity-90">Sessions Today</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-wellness text-white border-none">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{totalMinutes}</div>
            <div className="text-sm opacity-90">Minutes Meditated</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-energy text-white border-none">
          <CardContent className="p-4 text-center">
            <Heart className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">21</div>
            <div className="text-sm opacity-90">Day Streak</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-wellness-purple" />
            Mindfulness Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {sessions.map((session) => (
              <Card key={session.id} className={`border transition-all hover:shadow-md ${session.completed ? "bg-muted/30" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{session.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{session.duration}</span>
                        <span>{session.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{session.description}</p>
                      {session.progress > 0 && (
                        <Progress value={session.progress} className="mt-3 h-2" />
                      )}
                    </div>
                    <div className="ml-4">
                      {session.completed ? (
                        <div className="text-wellness-purple text-center">
                          <Brain className="h-6 w-6 mx-auto mb-1" />
                          <span className="text-xs">Complete</span>
                        </div>
                      ) : (
                        <Button size="sm" className="bg-gradient-mindful hover:opacity-90">
                          <Play className="h-4 w-4 mr-1" />
                          Begin
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-r from-wellness-purple/10 to-primary/10 border-wellness-purple/20">
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-wellness-purple" />
              <h3 className="text-lg font-semibold mb-2">Daily Reflection</h3>
              <p className="text-muted-foreground mb-4">Take a moment to reflect on your wellness journey</p>
              <Button variant="outline" className="border-wellness-purple text-wellness-purple hover:bg-wellness-purple hover:text-wellness-purple-foreground">
                Start Reflection
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}