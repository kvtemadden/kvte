import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { ArrowRightIcon } from "lucide-react";

interface CalendarModalProps {}

export const CalendarModal: React.FC<CalendarModalProps> = ({}) => {
  const [date, setDate] = useState<{ from?: Date; to?: Date } | undefined>(
    undefined
  );
  const [month, setMonth] = useState<Date | undefined>(undefined);
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const [isMobile, setIsMobile] = React.useState(false);
  const inputChangeRef = React.useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatDateInput = (d?: Date) =>
    d
      ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`
      : "";

  useEffect(() => {
    if (!inputChangeRef.current) {
      setStartInput(formatDateInput(date?.from));
      setEndInput(formatDateInput(date?.to));
    }
    inputChangeRef.current = false;
  }, [date]);

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputChangeRef.current = true;
    setStartInput(e.target.value);
    const newFrom = e.target.value ? new Date(e.target.value) : undefined;
    setDate((prev) => ({ from: newFrom, to: prev?.to }));
    if (newFrom) setMonth(newFrom);
  };
  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputChangeRef.current = true;
    setEndInput(e.target.value);
    const newTo = e.target.value ? new Date(e.target.value) : undefined;
    setDate((prev) => ({ from: prev?.from, to: newTo }));
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            {(() => {
              const range = date as unknown as
                | { from?: Date; to?: Date }
                | undefined;
              const fmt = (d?: Date) =>
                d
                  ? `${d.toLocaleString("en-US", { month: "short" })} ${String(
                      d.getDate()
                    ).padStart(2, "0")} ${d.getFullYear()}`
                  : "";
              if (range?.from && range?.to)
                return `${fmt(range.from)} - ${fmt(range.to)}`;
              if (range?.from) return fmt(range.from);
              return "Select dates";
            })()}
          </Button>
        </DialogTrigger>

        <DialogContent
          className="max-w-[95%] md:max-w-[700px] min-w-fit min-h-fit flex items-center justify-center [&>button:first-of-type]:hidden p-0"
          style={{ overflow: "auto" }}
        >
          <div className="grid grid-cols-12 min-h-fit min-w-fit grow">
            <div className="hidden sm:flex flex-col h-full col-span-3 gap-2 border-r px-4 row-span-2 py-4">
              {Object.keys(TimePeriodMapper).map((period) =>
                (() => {
                  const range = getPeriodRange(
                    period as keyof typeof TimePeriodMapper
                  );
                  const isSelected =
                    date?.from?.toDateString() === range.from.toDateString() &&
                    date?.to?.toDateString() === range.to.toDateString();
                  return (
                    <Button
                      key={period}
                      variant={isSelected ? "default" : "outline"}
                      className={`w-full font-normal ${
                        isSelected ? "bg-primary text-primary-foreground" : ""
                      }`}
                      onClick={() => {
                        setDate(range);
                        if (range.from) setMonth(new Date(range.from));
                      }}
                      size="sm"
                    >
                      {
                        TimePeriodMapper[
                          period as keyof typeof TimePeriodMapper
                        ]
                      }
                    </Button>
                  );
                })()
              )}
            </div>

            <div className="flex w-full items-center justify-center p-4 col-span-12 sm:col-span-9">
              <Calendar
                mode="range"
                selected={
                  date && date.from
                    ? { from: date.from, to: date.to }
                    : undefined
                }
                onSelect={setDate}
                month={month}
                onMonthChange={setMonth}
                endMonth={new Date()}
                className="rounded-lg border"
                fixedWeeks
                captionLayout={isMobile ? "dropdown" : "label"}
                numberOfMonths={isMobile ? 1 : 2}
                pagedNavigation
                showOutsideDays={false}
                broadcastCalendar
                classNames={{
                  root: "border-none w-full",
                }}
              />
            </div>

            <div className="col-span-12 sm:col-span-9 sm:col-start-4 grid grid-cols-5 items-center justify-center border-t p-4 w-full gap-2">
              <div className="col-span-2 flex items-center justify-center">
                <Input
                  type="date"
                  value={startInput}
                  onChange={handleStartChange}
                  className="w-full"
                  placeholder="Start date"
                />
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <ArrowRightIcon size={16} />
              </div>

              <div className="col-span-2 flex items-center justify-center">
                <Input
                  type="date"
                  value={endInput}
                  onChange={handleEndChange}
                  className="w-full"
                  placeholder="End date"
                />
              </div>
              {/* Warning text below inputs */}
              <div className="col-span-5 text-center">
                {(() => {
                  const startDate = startInput
                    ? new Date(startInput)
                    : undefined;
                  const endDate = endInput ? new Date(endInput) : undefined;
                  if (startDate && endDate) {
                    if (startDate > endDate) {
                      return (
                        <span className="text-red-500 text-sm">
                          Start date cannot be after end date.
                        </span>
                      );
                    }
                    if (endDate < startDate) {
                      return (
                        <span className="text-red-500 text-sm">
                          End date cannot be before start date.
                        </span>
                      );
                    }
                  }
                  return null;
                })()}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const TimePeriodMapper = {
  today: "Today",
  last7days: "Last 7 days",
  last30days: "Last 30 days",
  last90days: "Last 90 days",
  lastQuarter: "Last quarter",
  lastYear: "Last year",
};

const getPeriodRange = (period: keyof typeof TimePeriodMapper) => {
  const today = new Date();
  let from: Date, to: Date;
  switch (period) {
    case "today":
      from = today;
      to = today;
      break;
    case "last7days":
      to = today;
      from = new Date();
      from.setDate(to.getDate() - 6);
      break;
    case "last30days":
      to = today;
      from = new Date();
      from.setDate(to.getDate() - 29);
      break;
    case "last90days":
      to = today;
      from = new Date();
      from.setDate(to.getDate() - 89);
      break;
    case "lastQuarter": {
      const currentMonth = today.getMonth();
      const currentYear = today.getFullYear();
      const quarter = Math.floor(currentMonth / 3);
      let startMonth = (quarter - 1) * 3;
      let year = currentYear;
      if (startMonth < 0) {
        startMonth += 12;
        year -= 1;
      }
      from = new Date(year, startMonth, 1);
      to = new Date(year, startMonth + 3, 0); // last day of previous quarter
      break;
    }
    case "lastYear":
      from = new Date(today.getFullYear() - 1, 0, 1);
      to = new Date(today.getFullYear() - 1, 11, 31);
      break;
    default:
      from = to = today;
  }
  return { from, to };
};
