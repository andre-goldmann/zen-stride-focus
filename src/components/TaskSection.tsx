import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, CheckCircle, Clock } from "lucide-react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  isHabit?: boolean;
}

export function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Drink 8 glasses of water", completed: false, isHabit: true },
    { id: "2", text: "Complete morning workout", completed: true, isHabit: true },
    { id: "3", text: "Finish project presentation", completed: false },
    { id: "4", text: "Meditate for 10 minutes", completed: true, isHabit: true },
  ]);
  
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false
      }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const habitCount = tasks.filter(t => t.isHabit && t.completed).length;
  const totalHabits = tasks.filter(t => t.isHabit).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-energy text-white border-none">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{completedCount}</div>
            <div className="text-sm opacity-90">Tasks Completed</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-wellness text-white border-none">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{habitCount}/{totalHabits}</div>
            <div className="text-sm opacity-90">Habits Today</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-mindful text-white border-none">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {Math.round((completedCount / tasks.length) * 100)}%
            </div>
            <div className="text-sm opacity-90">Completion Rate</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Daily Tasks & Habits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
            />
            <Button onClick={addTask} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  task.completed ? "bg-muted/50" : "bg-background"
                }`}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
                <span className={`flex-1 ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                  {task.text}
                </span>
                {task.isHabit && (
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    Habit
                  </span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}