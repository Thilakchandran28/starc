import React, { useState } from 'react';

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
      color: 'bg-blue-100 border-blue-400'
    },
    {
      title: 'Former Survey',
      dueDate: '20/12/2023',
      time: '16:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-orange-100 border-orange-400'
    },
    {
      title: 'Former Survey',
      dueDate: '29/12/2023',
      time: '17:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-green-100 border-green-400'
    },
    {
      title: 'Former Survey',
      dueDate: '29/12/2023',
      time: '18:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-purple-100 border-purple-400'
    },
    {
      title: 'Former Survey',
      dueDate: '28/12/2023',
      time: '19:00',
      description: "Lorem Ipsum has been the industry's standard andard dummystandard dummy",
      color: 'bg-red-100 border-red-400'
    },
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday

  const renderWeek = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1)); // Adjust to make Monday the first day

    const weekDays = Array.from({ length: 7 }).map((_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });

    const getDayClass = (day) => {
      let classes = 'p-2 rounded-full';
      const today = new Date();

      // Highlight today's date
      if (day.getDate() === today.getDate() && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear()) {
        classes += ' bg-blue-600 text-white';
      }

      // Highlight dates with activities
      const hasActivity = activityItems.some(item => {
        const [dayStr, monthStr, yearStr] = item.dueDate.split('/');
        const itemDate = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
        return itemDate.getDate() === day.getDate() &&
               itemDate.getMonth() === day.getMonth() &&
               itemDate.getFullYear() === day.getFullYear();
      });
      if (hasActivity) {
        classes += ' border border-purple-600 text-purple-600';
      }

      return classes;
    };

    return (
      <div className="bg-white rounded-lg p-4 shadow-md col-span-4">
        <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-1">
          {daysOfWeek.map((day, i) => <div key={i}>{day}</div>)}
        </div>
        <div className="grid grid-cols-8 text-center text-sm">
          <div className="col-span-1"></div> {/* Empty corner for time labels */}
          {weekDays.map((day, i) => (
            <div key={`week-day-header-${i}`} className="p-2">
              <div className="text-xs font-semibold text-gray-700">{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className="text-xs text-gray-500">{day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 text-center text-sm">
          <div className="col-span-1 flex flex-col justify-around text-right pr-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`time-label-${i}`} className="text-xs text-gray-500">
                {`${(i + 3) % 12 === 0 ? 12 : (i + 3) % 12}${i + 3 < 12 ? 'PM' : 'PM'}`}
              </div>
            ))}
          </div>
          {weekDays.map((day, i) => (
            <div
              key={`week-day-${i}`}
              className={getDayClass(day)}
            >
              {/* Time slots and activities for the day */}
              <div className="relative h-48 border-t border-gray-200">
                {Array.from({ length: 8 }).map((_, hourIndex) => (
                  <div key={hourIndex} className="absolute w-full border-b border-gray-200" style={{ top: `${hourIndex * 12.5}%`, height: '12.5%' }}></div>
                ))}
                {activityItems.filter(item => {
                  const [itemDay, itemMonth, itemYear] = item.dueDate.split('/').map(Number);
                  const itemDate = new Date(itemYear, itemMonth - 1, itemDay);
                  return itemDate.toDateString() === day.toDateString();
                }).map((activity, index) => {
                  const [hour, minute] = activity.time.split(':').map(Number);
                  const topPosition = (hour - 15 + minute / 60) * (100 / 8); // Assuming 3 PM to 8 PM range
                  return (
                    <div
                      key={index}
                      className={`${activity.color} p-1 rounded-lg border text-xs absolute w-full`}
                      style={{ top: `${topPosition}%`, height: 'auto' }}
                    >
                      <h4 className="font-semibold">{activity.title}</h4>
                      <p className="text-xs text-gray-600">{activity.time} - {activity.dueDate}</p>
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
      <div className="bg-white rounded-lg p-4 shadow-md col-span-4">
        <div className="text-center text-sm font-medium text-gray-500 mb-1">
          <div className="text-xl font-semibold text-gray-700">{currentDate.toLocaleDateString('en-US', { day: 'numeric' })}</div>
          <div className="text-sm text-gray-500">{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</div>
        </div>
        <div className="grid grid-cols-8 text-center text-sm">
          <div className="col-span-1 flex flex-col justify-around text-right pr-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`time-label-${i}`} className="text-xs text-gray-500">
                {`${(i + 3) % 12 === 0 ? 12 : (i + 3) % 12}${i + 3 < 12 ? 'PM' : 'PM'}`}
              </div>
            ))}
          </div>
          <div className="col-span-7 relative h-48 border-t border-gray-200">
            {Array.from({ length: 8 }).map((_, hourIndex) => (
              <div key={hourIndex} className="absolute w-full border-b border-gray-200" style={{ top: `${hourIndex * 12.5}%`, height: '12.5%' }}></div>
            ))}
            {activitiesForDay.length > 0 ? (
              activitiesForDay.map((activity, index) => {
                const [hour, minute] = activity.time.split(':').map(Number);
                const topPosition = (hour - 15 + minute / 60) * (100 / 8); // Assuming 3 PM to 8 PM range
                return (
                  <div
                    key={index}
                    className={`${activity.color} p-1 rounded-lg border text-xs absolute w-full`}
                    style={{ top: `${topPosition}%`, height: 'auto' }}
                  >
                    <h4 className="font-semibold">{activity.title}</h4>
                    <p className="text-xs text-gray-600">{activity.time} - {activity.dueDate}</p>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No activities for this day.</p>
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
    const isCurrentMonth = today.getFullYear() === currentYear && today.getMonth() === monthIndex;

    const days = [];

    // Add empty cells for days before the start of the month
    for (let i = 0; i < startDayOffset; i++) {
      days.push(null);
    }

    // Add days from the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        month: monthIndex,
        year: currentYear,
        isCurrentMonth: true,
      });
    }

    // Add empty cells for days after the end of the month to fill the grid
    const remainingCells = 42 - days.length; // Assuming a maximum of 6 weeks (42 cells)
    for (let i = 0; i < remainingCells; i++) {
        days.push(null);
    }

    const getDayClass = (dayObj) => {
      let classes = 'p-1 text-center text-xs';
      if (dayObj) {
        const fullDate = new Date(dayObj.year, dayObj.month, dayObj.date);
        // Highlight today's date
        if (fullDate.getDate() === today.getDate() && fullDate.getMonth() === today.getMonth() && fullDate.getFullYear() === today.getFullYear()) {
          classes += ' bg-blue-600 text-white rounded-full';
        }
      }
      return classes;
    };

    return (
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-sm font-semibold mb-2 text-center text-gray-700">{monthName}</h3>
        <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <div key={i}>{day}</div>)}
        </div>
        <div className="grid grid-cols-7 text-center text-xs">
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

  const handlePrevYear = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear() - 1, prevDate.getMonth(), prevDate.getDate()));
  };

  const handleNextYear = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear() + 1, prevDate.getMonth(), prevDate.getDate()));
  };

  const handlePrev = () => {
    setCurrentDate(prevDate => {
      if (currentView === 'year') {
        return new Date(prevDate.getFullYear() - 1, prevDate.getMonth(), prevDate.getDate());
      } else if (currentView === 'month') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1); // Set day to 1 to avoid issues with months having fewer days
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
        return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1); // Set day to 1 to avoid issues with months having fewer days
      } else if (currentView === 'week') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7);
      } else if (currentView === 'daily') {
        return new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 1);
      }
      return prevDate;
    });
  };

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setCurrentDate(prevDate => new Date(year, prevDate.getMonth(), prevDate.getDate()));
  };

  const handleViewChange = (event) => {
    setCurrentView(event.target.value);
  };

  const currentMonthName = months[currentDate.getMonth()];
  const currentDay = currentDate.getDate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex space-x-6">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold" onClick={handleTodayClick}>Today</button>
            <button className="text-gray-600 hover:text-gray-900" onClick={handlePrev}>&lt;</button>
            <button className="text-gray-600 hover:text-gray-900" onClick={handleNext}>&gt;</button>
            <span className="text-xl font-bold">
              {currentView === 'year' && currentYear}
              {currentView === 'month' && `${months[currentDate.getMonth()]} ${currentYear}`}
              {currentView === 'week' && `Week of ${currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
              {currentView === 'daily' && currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" value={currentView} onChange={handleViewChange}>
              <option value="year">Year</option>
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="daily">Daily</option>
            </select>
            <button className="flex items-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4h13M3 8h9m-9 4h9m5-4a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Filter
            </button>
            <button className="text-gray-600 hover:text-gray-900">&#8594;</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {currentView === 'year' && Array.from({ length: 12 }, (_, i) => renderMonth(i))}
          {currentView === 'month' && <div className="col-span-4">{renderMonth(currentDate.getMonth())}</div>}
          {currentView === 'week' && renderWeek()}
          {currentView === 'daily' && renderDaily()}
        </div>
      </div>

      <div className="w-80 flex-shrink-0 space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Schedule</h2>
            <select className="px-3 py-1 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Monthly</option>
            </select>
          </div>
          <p className="text-sm text-gray-500 mb-4">{currentMonthName}, {currentYear}</p>
          <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
          <div className="grid grid-cols-7 text-center text-sm">
            {[...Array(getDaysInMonth(currentYear, currentDate.getMonth())).keys()].map(day => (
              <div
                key={`small-cal-${day + 1}`}
                className={`p-2 rounded-full ${day + 1 === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear() ? 'bg-purple-600 text-white' : ''} ${activityItems.some(item => {
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

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Today's Activity</h2>
            <span className="text-gray-500">(20)</span>
          </div>
          <div className="space-y-4">
            {activityItems.map((activity, index) => (
              <div key={index} className={`border-l-4 ${activity.color} p-4 rounded-r-md`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                  <span className="text-xs text-gray-600">Due date : {activity.dueDate}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;