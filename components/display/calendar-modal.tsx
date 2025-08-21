import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { ArrowRightIcon } from "lucide-react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen = false,
  onClose,
}) => {
  const [show, setShow] = useState(isOpen);
  const [date, setDate] = useState<{ from?: Date; to?: Date } | undefined>(
    undefined
  );

  return (
    <>
      {/* <Button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        {show ? "Hide" : "Show"}
      </Button> */}

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
          className="min-w-fit min-h-fit flex items-center justify-center [&>button:first-of-type]:hidden p-0"
          style={{ maxWidth: "700px", overflow: "auto" }}
        >
          <div className="grid grid-cols-12 min-h-fit min-w-fit grow">
            <div className="flex flex-col h-full col-span-3 gap-2 border-r px-4 row-span-2 py-4">
              {/* create button per time period */}
              {Object.keys(TimePeriodMapper).map((period) => (
                <Button
                  key={period}
                  variant="outline"
                  className="w-full font-normal"
                  onClick={() => {
                    setDate({ from: new Date(), to: new Date() });
                  }}
                  size="sm"
                >
                  {TimePeriodMapper[period]}
                </Button>
              ))}
            </div>

            <div className="flex w-full items-center justify-center p-4 col-span-9">
              <Calendar
                mode="range"
                captionLayout="dropdown"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
                fixedWeeks
                numberOfMonths={2}
                pagedNavigation
                navLayout="after"
                showOutsideDays={false}
                broadcastCalendar
                classNames={{
                  root: "border-none w-full ",
                }}
              />
            </div>

            <div className="col-span-9 col-start-4 flex flex-row gap-3 items-center border-t p-4">
              <Input placeholder="Search" />

              <ArrowRightIcon className="w-8 h-8" />

              <Input placeholder="Search" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const TimePeriodMapper = {
  last7days: "Last 7 days",
  last30days: "Last 30 days",
  last90days: "Last 90 days",
  lastQuarter: "Last quarter",
  lastYear: "Last year",
};
