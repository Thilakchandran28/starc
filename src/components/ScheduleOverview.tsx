import React, { useState } from 'react';
import { LuArrowRightToLine } from "react-icons/lu";
import { CiFilter,FaGreaterThan  } from "react-icons/ci";

const ScheduleOverview = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('year'); // 'year', 'month', 'week', 'daily'
  const currentYear = currentDate.getFullYear();

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const activityItems = [
    {
      title: 'Former Survey',
      dueDate: '20/12/2023',
      time: '15:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-blue-100 border-l-blue-400'
    },
    {
      title: 'Former Survey',
      dueDate: '20/12/2023',
      time: '16:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-orange-100 border-l-orange-400'
    },
    {
      title: 'Former Survey',
      dueDate: '29/12/2023',
      time: '17:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-green-100 border-l-green-400'
    },
    {
      title: 'Former Survey',
      dueDate: '29/12/2023',
      time: '18:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-purple-100 border-l-purple-400'
    },
    {
      title: 'Former Survey',
      dueDate: '28/12/2023',
      time: '19:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-red-100 border-l-red-400'
    },
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday

  const renderWeek = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));

    const weekDays = Array.from({ length: 7 }).map((_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });

    const getDayClass = (day) => {
      let classes = 'p-27 rounded-full';
      const today = new Date();
      if (day.getDate() === today.getDate() && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear()) {
        classes += ' bg-blue-600 text-white';
      }
      return classes;
    };

    return (
      <div className="bg-white rounded-lg p-2 shadow-sm col-span-4">
        <div className="grid grid-cols-8 text-center text-[10px] font-medium text-gray-500 mb-1">
          <div className="col-span-1"></div>
          {weekDays.map((day, i) => (
            <div key={`week-day-header-${i}`} className="p-1">
              <div className="text-[10px] font-semibold text-gray-700">{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className="text-[10px] text-gray-500">{day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 text-center text-[10px]">
          <div className="col-span-1 flex flex-col justify-around text-right pr-1">
            {['15:00', '16:00', '17:00', '18:00', '19:00'].map((time, i) => (
              <div key={`time-label-${i}`} className="text-[10px] text-gray-500">{time}</div>
            ))}
          </div>
          {weekDays.map((day, i) => (
            <div key={`week-day-${i}`} className={getDayClass(day)}>
              <div className="relative h-32 border-t border-gray-200">
                {Array.from({ length: 5 }).map((_, hourIndex) => (
                  <div key={hourIndex} className="absolute w-full border-b border-gray-200" style={{ top: `${hourIndex * 20}%`, height: '20%' }}></div>
                ))}
                {activityItems.filter(item => {
                  const [itemDay, itemMonth, itemYear] = item.dueDate.split('/').map(Number);
                  const itemDate = new Date(itemYear, itemMonth - 1, itemDay);
                  return itemDate.toDateString() === day.toDateString();
                }).map((activity, index) => {
                  const [hour, minute] = activity.time.split(':').map(Number);
                  const topPosition = (hour - 15 + minute / 60) * (100 / 5); // 15:00 to 19:00 range
                  return (
                    <div
                      key={index}
                      className={`${activity.color} p-1 rounded-md text-[10px] absolute w-full`}
                      style={{ top: `${topPosition}%`, height: '15%' }}
                    >
                      <h4 className="font-semibold">{activity.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDaily = () => {
    const today = currentDate;
    const activitiesForDay = activityItems.filter(item => {
      const [dayStr, monthStr, yearStr] = item.dueDate.split('/');
      const itemDate = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
      return itemDate.getDate() === today.getDate() &&
             itemDate.getMonth() === today.getMonth() &&
             itemDate.getFullYear() === today.getFullYear();
    });

    return (
      <div className="bg-white rounded-lg p-2 shadow-sm col-span-4">
        <div className="text-center text-[10px] font-medium text-gray-500 mb-1">
          <div className="text-base font-semibold text-gray-700">{currentDate.toLocaleDateString('en-US', { day: 'numeric' })}</div>
          <div className="text-[10px] text-gray-500">{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</div>
        </div>
        <div className="grid grid-cols-8 text-center text-[10px]">
          <div className="col-span-1 flex flex-col justify-around text-right pr-1">
            {['15:00', '16:00', '17:00', '18:00', '19:00'].map((time, i) => (
              <div key={`time-label-${i}`} className="text-[10px] text-gray-500">{time}</div>
            ))}
          </div>
          <div className="col-span-7 relative h-32 border-t border-gray-200">
            {Array.from({ length: 5 }).map((_, hourIndex) => (
              <div key={hourIndex} className="absolute w-full border-b border-gray-200" style={{ top: `${hourIndex * 20}%`, height: '20%' }}></div>
            ))}
            {activitiesForDay.length > 0 ? (
              activitiesForDay.map((activity, index) => {
                const [hour, minute] = activity.time.split(':').map(Number);
                const topPosition = (hour - 15 + minute / 60) * (100 / 5); // 15:00 to 19:00 range
                return (
                  <div
                    key={index}
                    className={`${activity.color} p-1 rounded-md text-[10px] absolute w-full`}
                    style={{ top: `${topPosition}%`, height: '15%' }}
                  >
                    <h4 className="font-semibold">{activity.title}</h4>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 text-[10px] mt-4">No activities for this day.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderMonth = (monthIndex) => {
    const monthName = months[monthIndex];
    const daysInMonth = getDaysInMonth(currentYear, monthIndex);
    const startDayOffset = (getStartDayOfMonth(currentYear, monthIndex) + 6) % 7; // Adjust to make Monday the first day (0-indexed)

    const today = new Date();
    const days = [];

    for (let i = 0; i < startDayOffset; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        month: monthIndex,
        year: currentYear,
        isCurrentMonth: true,
      });
    }

    const remainingCells = 42 - days.length;
    for (let i = 0; i < remainingCells; i++) {
      days.push(null);
    }

    const getDayClass = (dayObj) => {
      let classes = 'p-1 text-center text-[10px]';
      if (dayObj) {
        const fullDate = new Date(dayObj.year, dayObj.month, dayObj.date);
        if (fullDate.getDate() === today.getDate() && fullDate.getMonth() === today.getMonth() && fullDate.getFullYear() === today.getFullYear()) {
          classes += ' bg-blue-600 text-white rounded-full';
        }
        const hasActivity = activityItems.some(item => {
          const [dayStr, monthStr, yearStr] = item.dueDate.split('/');
          const itemDate = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
          return itemDate.getDate() === dayObj.date &&
                 itemDate.getMonth() === dayObj.month &&
                 itemDate.getFullYear() === dayObj.year;
        });
        if (hasActivity) {
          classes += ' border border-purple-600 text-purple-600 rounded-full';
        }
      }
      return classes;
    };

    return (
      <div className="bg-white rounded-lg p-2 shadow-sm">
        <h3 className="text-xs font-semibold mb-1 text-center text-gray-700">{monthName}</h3>
        <div className="grid grid-cols-7 text-center text-[10px] font-medium text-gray-500 mb-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <div key={i}>{day}</div>)}
        </div>
        <div className="grid grid-cols-7 text-center text-[10px]">
          {days.map((dayObj, index) => (
            <div
              key={`${monthName}-${index}`}
              className={getDayClass(dayObj)}
            >
              {dayObj ? dayObj.date : ''}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleTodayClick = () => {
    setCurrentDate(new Date());
  };

  const handlePrev = () => {
    setCurrentDate(prevDate => {
      if (currentView === 'year') {
        return new Date(prevDate.getFullYear() - 1, prevDate.getMonth(), prevDate.getDate());
      } else if (currentView === 'month') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      } else if (currentView === 'week') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7);
      } else if (currentView === 'daily') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 1);
      }
      return prevDate;
    });
  };

  const handleNext = () => {
    setCurrentDate(prevDate => {
      if (currentView === 'year') {
        return new Date(prevDate.getFullYear() + 1, prevDate.getMonth(), prevDate.getDate());
      } else if (currentView === 'month') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      } else if (currentView === 'week') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7);
      } else if (currentView === 'daily') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 1);
      }
      return prevDate;
    });
  };

  const handleViewChange = (event) => {
    setCurrentView(event.target.value);
  };

  const currentMonthName = months[currentDate.getMonth()];
  const currentDay = currentDate.getDate();

  return (
    <div className="p-4 bg-gray min-h-screen flex space-x-4">
      <div className="flex-grow bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md font-medium text-sm" onClick={handleTodayClick}>Today</button>
            <button className= " pb-2 text-gray-600 hover:text-gray-900 text-3xl" onClick={handlePrev}>{"<"} </button>
            <button className=" pb-2 text-gray-600 hover:text-gray-900 text-3xl" onClick={handleNext}>{">"}</button>
            <span className="text-lg font-semibold">
              {currentView === 'year' && currentYear}
              {currentView === 'month' && `${months[currentDate.getMonth()]} ${currentYear}`}
              {currentView === 'week' && `Week of ${currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
              {currentView === 'daily' && currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" value={currentView} onChange={handleViewChange}>
              <option value="year">Year</option>
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="daily">Daily</option>
            </select>
            <button className="flex items-center px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 text-sm">
             <span><CiFilter  size={20} strokeWidth={1} /></span>
              Filter
            </button>
            <button className="text-gray-500 hover:text-gray-900 text-lg"><LuArrowRightToLine size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {currentView === 'year' && Array.from({ length: 12 }, (_, i) => renderMonth(i))}
          {currentView === 'month' && <div className="col-span-4">{renderMonth(currentDate.getMonth())}</div>}
          {currentView === 'week' && renderWeek()}
          {currentView === 'daily' && renderDaily()}
        </div>
      </div>

      <div className="w-72 flex-shrink-0 space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Schedule</h2>
            <select className="px-2 py-1 rounded-md border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Monthly</option>
            </select>
          </div>
          <p className="text-xs text-gray-500 mb-3">{currentMonthName}, {currentYear}</p>
          <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-1">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
          <div className="grid grid-cols-7 text-center text-xs">
            {[...Array(getDaysInMonth(currentYear, currentDate.getMonth())).keys()].map(day => (
              <div
                key={`small-cal-${day + 1}`}
                className={`p-1 rounded-full ${day + 1 === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear() ? 'bg-purple-600 text-white' : ''} ${activityItems.some(item => {
                  const [dayStr, monthStr, yearStr] = item.dueDate.split('/');
                  const itemDate = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
                  return itemDate.getDate() === day + 1 &&
                         itemDate.getMonth() === currentDate.getMonth() &&
                         itemDate.getFullYear() === currentDate.getFullYear();
                }) ? 'border border-purple-600 text-purple-600' : ''}`}
              >
                {day + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Today's Activity</h2>
            <span className="text-gray-500 text-xs">(20)</span>
          </div>
          <div className="space-y-3">
            {activityItems.map((activity, index) => (
              <div key={index} className={`border-l-4 ${activity.color} p-3 rounded-r-md`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-sm text-gray-800">{activity.title}</h3>
                  <span className="text-xs text-gray-600">Due date: {activity.dueDate}</span>
                </div>
                <p className="text-xs text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;