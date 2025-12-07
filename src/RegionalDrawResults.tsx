import { useState, useEffect } from "react";
import { config } from './config';
import { format, subHours, addHours, parseISO, isValid } from "date-fns";

interface Draw {
  cityName: string;
  time: string;
  date: string;
  randomNumber: number | null;
}

export default function RegionalDrawResults() {
  const [draws, setDraws] = useState<Draw[]>([]);

  const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  const today = format(nowIST, "yyyy-MM-dd");
  const yesterday = format(subHours(nowIST, 24), "yyyy-MM-dd");
  const todayLabel = format(nowIST, "EEE. do");
  const yesterdayLabel = format(subHours(nowIST, 24), "EEE. do");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${config.API_URL}/admin`);
        if (res.ok) {
          const data = await res.json();
          setDraws(data.length > 0 ? data : []);
        }
      } catch (err) {
        console.log("API failed");
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const parseTime = (d: Draw): Date => {
    const dt = parseISO(`${d.date}T${d.time}:00+05:30`);
    return isValid(dt) ? dt : new Date(0);
  };

  const cityMap = new Map<string, {
    todayTime: string;
    todayDrawDateTime: Date;
    todayNum: number | null;
    yesterdayTime: string;
    yesterdayDrawDateTime: Date;
    yesterdayNum: number | null;
    section: "live" | "next" | "rest";
  }>();

  // Build city data
  draws.forEach((d) => {
    const dt = parseTime(d);
    if (!isValid(dt)) return;

    if (!cityMap.has(d.cityName)) {
      cityMap.set(d.cityName, {
        todayTime: "",
        todayDrawDateTime: new Date(0),
        todayNum: null,
        yesterdayTime: "",
        yesterdayDrawDateTime: new Date(0),
        yesterdayNum: null,
        section: "rest",
      });
    }

    const entry = cityMap.get(d.cityName)!;

    if (d.date === today) {
      entry.todayNum = d.randomNumber;
      if (dt > entry.todayDrawDateTime) {
        entry.todayTime = d.time;
        entry.todayDrawDateTime = dt;
      }
    }
    
    if (d.date === yesterday) {
      entry.yesterdayNum = d.randomNumber;
      if (dt > entry.yesterdayDrawDateTime) {
        entry.yesterdayTime = d.time;
        entry.yesterdayDrawDateTime = dt;
      }
    }
  });

  // Categorize based on TIME comparison (not full datetime)
  const threeHoursAgo = subHours(nowIST, 3);
  const threeHoursLater = addHours(nowIST, 3);

  cityMap.forEach((entry) => {
    let section: "live" | "next" | "rest" = "rest";
    
    // Helper function to create today's datetime from a time string
    const createTodayDateTime = (timeStr: string): Date => {
      if (!timeStr) return new Date(0);
      const [h, m] = timeStr.split(":").map(Number);
      const dt = new Date(nowIST);
      dt.setHours(h, m, 0, 0);
      return dt;
    };
    
    // Check BOTH today's and yesterday's draw TIMES (converted to today's date for comparison)
    const timesToCheck = [];
    
    if (entry.todayTime) {
      timesToCheck.push(createTodayDateTime(entry.todayTime));
    }
    if (entry.yesterdayTime) {
      timesToCheck.push(createTodayDateTime(entry.yesterdayTime));
    }
    
    for (const drawTime of timesToCheck) {
      // LIVE: draw time is between (now - 3hrs) and now
      if (drawTime > threeHoursAgo && drawTime <= nowIST) {
        section = "live";
        break;
      }
      // NEXT: draw time is between now and (now + 3hrs)
      else if (drawTime > nowIST && drawTime <= threeHoursLater) {
        section = "next";
        break;
      }
    }
    
    entry.section = section;
    
    // Display today's time if available, otherwise yesterday's
    if (!entry.todayTime && entry.yesterdayTime) {
      entry.todayTime = entry.yesterdayTime;
    }
  });

  const live = Array.from(cityMap.entries()).filter(([_, v]) => v.section === "live");
  const next = Array.from(cityMap.entries()).filter(([_, v]) => v.section === "next");
  const rest = Array.from(cityMap.entries()).filter(([_, v]) => v.section === "rest");

  // Sort by time (not full datetime) - parse the time string
  const sortByTimeOfDay = (a: any, b: any) => {
    const getTimeMinutes = (timeStr: string) => {
      if (!timeStr) return 0;
      const [h, m] = timeStr.split(":").map(Number);
      return h * 60 + m;
    };
    return getTimeMinutes(a[1].todayTime) - getTimeMinutes(b[1].todayTime);
  };
  
  live.sort(sortByTimeOfDay);
  next.sort(sortByTimeOfDay);
  rest.sort(sortByTimeOfDay);

  const format12 = (t: string) => {
    if (!t) return "";
    const [h, m] = t.split(":").map(Number);
    const d = new Date();
    d.setHours(h, m);
    return format(d, "h:mm a").toUpperCase();
  };

  const Row = ({ cityName, data }: { cityName: string; data: any }) => {
    const hasResult = data.todayNum !== null;
    
    return (
      <div className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 ${hasResult ? "bg-yellow-400" : "bg-white"}`}>
        <div className="flex-1">
          <div className={`text-base font-bold ${hasResult ? "text-gray-900" : "text-gray-800"}`}>
            {cityName}
          </div>
          <div className="text-xs text-blue-600 mt-1">
            at {format12(data.todayTime)} <span className="text-blue-500">Record Chart</span>
          </div>
        </div>
        
        <div className="w-24 text-center">
          <div className="text-4xl font-bold text-gray-900">
            {data.yesterdayNum ?? "XX"}
          </div>
        </div>
        
        <div className="w-24 text-center">
          <div className="text-4xl font-bold text-gray-900">
            {data.todayNum ?? "XX"}
          </div>
        </div>
      </div>
    );
  };

  const Section = ({ title, list }: { title: string; list: [string, any][] }) => (
    <div className="border-l-4 border-red-600 mb-4">
      <div className="bg-red-600 text-white font-bold px-6 py-2.5 text-sm uppercase">
        {title}
      </div>
      {list.length === 0 ? (
        <div className="bg-white py-12 text-center text-gray-500 text-sm">
          No results
        </div>
      ) : (
        <div>
          {list.map(([city, data], i) => <Row key={i} cityName={city} data={data} />)}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-4 text-base font-bold">
          Satta King Fast Results of {format(nowIST, "MMMM dd, yyyy")} & {format(subHours(nowIST, 24), "MMMM dd, yyyy")}
        </div>

        {/* Date Headers */}
        <div className="bg-gray-800 text-white flex items-center justify-between px-6 py-3">
          <div className="font-bold text-sm">Regional Offline Draw Results</div>
          <div className="flex gap-28 text-sm font-semibold">
            <span>{yesterdayLabel}</span>
            <span>{todayLabel}</span>
          </div>
        </div>

        {/* Results Sections */}
        <div className="mt-1">
          <Section title="LIVE" list={live} />
          <Section title="NEXT" list={next} />
          <Section title="REST" list={rest} />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-gray-600 text-xs">
        Last Updated: {format(nowIST, "dd MMMM yyyy, h:mm:ss a")} IST
      </div>
    </div>
  );
}