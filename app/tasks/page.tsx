"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  IconPlus,
  IconTrash,
  IconFlame,
  IconClock,
  IconArrowDown,
} from "@tabler/icons-react";

type Priority = "high" | "medium" | "low";

interface Task {
  id: string;
  text: string;
  done: boolean;
  priority: Priority;
  createdAt: string;
}

const STORAGE_KEY = "protos-tasks";

const priorityConfig: Record<
  Priority,
  { label: string; color: string; icon: React.ReactNode }
> = {
  high: {
    label: "High",
    color: "bg-red-500/15 text-red-600 border-red-200",
    icon: <IconFlame size={14} />,
  },
  medium: {
    label: "Med",
    color: "bg-yellow-500/15 text-yellow-600 border-yellow-200",
    icon: <IconClock size={14} />,
  },
  low: {
    label: "Low",
    color: "bg-blue-500/15 text-blue-600 border-blue-200",
    icon: <IconArrowDown size={14} />,
  },
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
    setLoaded(true);
  }, []);

  const persist = useCallback((updated: Task[]) => {
    setTasks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, []);

  const addTask = () => {
    const text = newTask.trim();
    if (!text) return;
    const task: Task = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      text,
      done: false,
      priority,
      createdAt: new Date().toISOString(),
    };
    persist([task, ...tasks]);
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    persist(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: string) => {
    persist(tasks.filter((t) => t.id !== id));
  };

  const clearDone = () => {
    persist(tasks.filter((t) => !t.done));
  };

  const pending = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  if (!loaded) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border px-4 pt-12 pb-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {today}
        </p>
        <h1 className="text-2xl font-bold tracking-tight mt-1">Tasks</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-muted-foreground">
            {pending.length} pending
          </span>
          {done.length > 0 && (
            <span className="text-sm text-muted-foreground">
              &middot; {done.length} done
            </span>
          )}
        </div>
      </div>

      {/* Add task */}
      <div className="px-4 py-4 border-b border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
          className="flex gap-2"
        >
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to get done?"
            className="flex-1 h-11 text-base"
            autoComplete="off"
          />
          <Button type="submit" size="icon" className="h-11 w-11 shrink-0">
            <IconPlus size={20} />
          </Button>
        </form>

        {/* Priority selector */}
        <div className="flex gap-2 mt-3">
          {(["high", "medium", "low"] as Priority[]).map((p) => (
            <button
              key={p}
              onClick={() => setPriority(p)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                priorityConfig[p].color
              } ${
                priority === p
                  ? "ring-2 ring-offset-1 ring-ring scale-105"
                  : "opacity-50"
              }`}
            >
              {priorityConfig[p].icon}
              {priorityConfig[p].label}
            </button>
          ))}
        </div>
      </div>

      {/* Task list */}
      <div className="px-4 py-3 space-y-2">
        {pending.length === 0 && done.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🎯</p>
            <p className="text-muted-foreground text-sm">
              No tasks yet. Add one above!
            </p>
          </div>
        )}

        {pending.map((task) => (
          <Card
            key={task.id}
            className="flex items-center gap-3 px-4 py-3 active:scale-[0.98] transition-transform"
          >
            <Checkbox
              checked={false}
              onCheckedChange={() => toggleTask(task.id)}
              className="h-5 w-5 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-snug truncate">
                {task.text}
              </p>
            </div>
            <Badge
              variant="outline"
              className={`shrink-0 text-[10px] px-1.5 py-0.5 ${priorityConfig[task.priority].color}`}
            >
              {priorityConfig[task.priority].icon}
            </Badge>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-muted-foreground/40 active:text-destructive p-1 -mr-1"
            >
              <IconTrash size={16} />
            </button>
          </Card>
        ))}

        {/* Completed section */}
        {done.length > 0 && (
          <div className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Completed
              </p>
              <button
                onClick={clearDone}
                className="text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear all
              </button>
            </div>
            {done.map((task) => (
              <Card
                key={task.id}
                className="flex items-center gap-3 px-4 py-3 mb-2 opacity-50"
              >
                <Checkbox
                  checked={true}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="h-5 w-5 rounded-full"
                />
                <p className="flex-1 text-sm line-through text-muted-foreground truncate">
                  {task.text}
                </p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-muted-foreground/40 active:text-destructive p-1 -mr-1"
                >
                  <IconTrash size={16} />
                </button>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Bottom safe area spacer for iPhone */}
      <div className="h-20" />
    </div>
  );
}
