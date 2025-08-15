import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dumbbell, Play, Trophy, Target } from "lucide-react";

const workouts = [
  {
    id: "1",
    name: "Morning Energy Boost",
    duration: "15 min",
    difficulty: "Beginner",
    exercises: ["Jumping Jacks", "Push-ups", "Squats", "Plank"],
    completed: false
  },
  {
    id: "2",
    name: "Core Strength",
    duration: "20 min",
    difficulty: "Intermediate",
    exercises: ["Crunches", "Russian Twists", "Mountain Climbers", "Dead Bug"],
    completed: true
  },
  {
    id: "3",
    name: "Full Body HIIT",
    duration: "30 min",
    difficulty: "Advanced",
    exercises: ["Burpees", "High Knees", "Lunges", "Pull-ups"],
    completed: false
  }
];

export function WorkoutSection() {
  const completedWorkouts = workouts.filter(w => w.completed).length;
  const completionRate = Math.round((completedWorkouts / workouts.length) * 100);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-energy text-white border-none">
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{completedWorkouts}</div>
            <div className="text-sm opacity-90">Workouts Complete</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-wellness text-white border-none">
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">450</div>
            <div className="text-sm opacity-90">Calories Burned</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-mindful text-white border-none">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm opacity-90">Day Streak</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-accent" />
            Today's Workouts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {workouts.map((workout) => (
              <Card key={workout.id} className={`border transition-all hover:shadow-md ${workout.completed ? "bg-muted/30" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{workout.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{workout.duration}</span>
                        <span>{workout.difficulty}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {workout.exercises.map((exercise, idx) => (
                          <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {exercise}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4">
                      {workout.completed ? (
                        <div className="text-green-600 text-center">
                          <Trophy className="h-6 w-6 mx-auto mb-1" />
                          <span className="text-xs">Done!</span>
                        </div>
                      ) : (
                        <Button size="sm" className="bg-gradient-energy hover:opacity-90">
                          <Play className="h-4 w-4 mr-1" />
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                  {workout.completed && (
                    <Progress value={100} className="mt-3 h-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}