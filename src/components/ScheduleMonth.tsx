import React from 'react';

interface ActivityItem {
  title: string;
  dueDate: string;
  time: string;
  description: string;
  color: string;
}

interface DayObj {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

interface ScheduleMonthProps {
  currentDate: Date;
  activityItems: ActivityItem[];
}

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday'
];

const ScheduleMonth: React.FC<ScheduleMonthProps> = ({ currentDate, activityItems }) => {
  const getDaysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year: number, month: number): number => new Date(year, month, 1).getDay();

  const renderMonth = (monthIndex: number): JSX.Element => {
    const monthName = months[monthIndex];
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), monthIndex);
    // Adjust start day to match the image (Monday as first day, 0-indexed)
    const startDayOffset = (getStartDayOfMonth(currentDate.getFullYear(), monthIndex) + 6) % 7;

    const today = new Date();
    const days: (DayObj | null)[] = [];

    // Add empty cells before the first day of the month
    for (let i = 0; i < startDayOffset; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        month: monthIndex,
        year: currentDate.getFullYear(),
        isCurrentMonth: true,
      });
    }

    // Add empty cells after the last day to fill the grid (6 rows x 7 columns = 42 cells)
    const remainingCells = 42 - days.length;
    for (let i = 0; i < remainingCells; i++) {
      days.push(null);
    }

    const getDayClass = (dayObj: DayObj | null): string => {
      let classes = 'p-2 text-center text-sm h-12 flex flex-col items-center justify-center relative';
      if (dayObj) {
        const fullDate = new Date(dayObj.year, dayObj.month, dayObj.date);
        // Highlight today with a blue background
        if (
          fullDate.getDate() === today.getDate() &&
          fullDate.getMonth() === today.getMonth() &&
          fullDate.getFullYear() === today.getFullYear()
        ) {
          classes += ' bg-blue-100 text-blue-800 rounded-md';
        }
      } else {
        classes += ' text-gray-300';
      }
      return classes;
    };

    const getActivityMarkers = (dayObj: DayObj | null): JSX.Element[] => {
      if (!dayObj) return [];
      const activitiesOnDay = activityItems.filter(item => {
        const [dayStr, monthStr, yearStr] = item.dueDate.split('/');
        const itemDate = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
        return (
          itemDate.getDate() === dayObj.date &&
          itemDate.getMonth() === dayObj.month &&
          itemDate.getFullYear() === dayObj.year
        );
      });

      return activitiesOnDay.map((activity, index) => {
        // Extract the color for the dot from the activity's color class (e.g., 'border-l-blue-400' -> 'bg-blue-400')
        const dotColor = activity.color.split(' ').find(cls => cls.startsWith('border-l-'))?.replace('border-l-', 'bg-') || 'bg-gray-400';
        return (
          <span
            key={`activity-dot-${dayObj.date}-${index}`}
            className={`${dotColor} w-2 h-2 rounded-full mr-1`}
          />
        );
      });
    };

    return (
      <div className="bg-white rounded-lg p-4 shadow-sm col-span-4">
        {/* Days of the week header */}
        <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2 border-b border-gray-200 pb-2">
          {daysOfWeek.map((day, i) => (
            <div key={`day-header-${i}`} className="p-2">
              {day}
            </div>
          ))}
        </div>
        {/* Days grid */}
        <div className="grid grid-cols-7 text-center text-sm">
          {days.map((dayObj, index) => (
            <div
              key={`${monthName}-${index}`}
              className={`border border-gray-200 ${getDayClass(dayObj)}`}
            >
              <span>{dayObj ? dayObj.date : ''}</span>
              {/* Activity markers (dots) */}
              {dayObj && (
                <div className="absolute bottom-1 flex justify-center space-x-1">
                  {getActivityMarkers(dayObj)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return renderMonth(currentDate.getMonth());
};

export default ScheduleMonth;