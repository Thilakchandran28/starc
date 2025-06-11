import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
// Mock schedule data
const scheduleData = [
  { id: 1, time: "10 AM", title: "Introduction class", label: "Meeting", module: "", duration: "10 am - 11 am" },
  { id: 2, time: "12 PM", title: "Fundamentals and basics", label: "Module 2", module: "2", duration: "12 pm - 1 pm" },
  { id: 3, time: "03 PM", title: "AWS Basics", label: "Module 4", module: "4", duration: "3 pm - 4 pm" }
];
// Full day names to prevent duplicates like "S"
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Sun");
  const [filter, setFilter] = useState("all");
  // Automatically set the current day on load
  useEffect(() => {
    const currentDayIndex = new Date().getDay(); // 0 = Sun, 6 = Sat
    setSelectedDay(days[currentDayIndex]);
  }, []);
  const filteredData =
    filter === "all"
      ? scheduleData
      : scheduleData.filter(item =>
          item.label.toLowerCase().includes(filter.toLowerCase())
        );
  return (
    <div className="max-w-md mx-auto p-4 border-2 border-blue-500 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-purple-700">Today's Schedule</h2>
        <Select onValueChange={value => setFilter(value)} defaultValue="all">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="meeting">Meeting</SelectItem>
            <SelectItem value="module">Modules</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <p className="text-sm text-gray-500 mb-2">{new Date().toLocaleString()}</p>
      {/* Day Selector */}
      <div className="flex space-x-2 mb-4">
        {days.map((day, index) => (
          <Button
            key={index}
            variant={day === selectedDay ? "default" : "ghost"}
            className={`rounded-lg w-8 h-8 p-0 text-sm ${
              day === selectedDay ? "bg-purple-600 text-white" : ""
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day.charAt(0)}
          </Button>
        ))}
      </div>
      {/* Schedule Blocks */}
      <div className="space-y-6">
        {["10 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM"].map(
          (hour, idx) => {
            const session = filteredData.find(item => item.time === hour);
            return (
              <div key={idx}>
                <p className="text-sm text-gray-600 mb-1">{hour}</p>
                {session ? (
                  <Card className="bg-white border border-purple-200 shadow-sm">
                    <CardContent className="p-3">
                      <p className="text-xs font-semibold text-purple-700 mb-1">
                        {session.label}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {session.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {session.duration}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-16" />
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}