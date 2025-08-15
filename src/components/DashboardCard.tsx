import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  onAction: () => void;
  gradient: string;
  stats?: {
    label: string;
    value: string;
  };
}

export function DashboardCard({
  title,
  description,
  icon: Icon,
  buttonText,
  onAction,
  gradient,
  stats
}: DashboardCardProps) {
  return (
    <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className={`absolute inset-0 ${gradient} opacity-10 group-hover:opacity-15 transition-opacity`} />
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${gradient} text-white`}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </div>
          {stats && (
            <div className="text-right">
              <div className="text-2xl font-bold">{stats.value}</div>
              <div className="text-xs text-muted-foreground">{stats.label}</div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <Button 
          onClick={onAction}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}