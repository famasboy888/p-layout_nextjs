"use client";
import { useActionState, useRef, useState } from "react";
import { addEvent } from "~/features/event/actions/eventAction";

export default function AddEventDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(addEvent, undefined);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closerDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openDrawer}
        className="btn btn-circle fixed right-7 top-24 hidden h-16 w-16 items-center justify-center bg-primary-gradient text-base-100 shadow-lg md:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <button
        onClick={openDrawer}
        className="btn btn-circle fixed bottom-7 right-7 flex h-16 w-16 items-center justify-center bg-primary-gradient text-base-100 shadow-lg md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <div className="relative z-40">
        {isOpen && (
          <button
            className="fixed inset-0 cursor-default bg-black bg-opacity-50"
            onClick={closerDrawer}
          ></button>
        )}
        <div
          className={`fixed inset-x-0 bottom-0 h-3/4 w-full transform rounded-t-lg bg-white ${isOpen ? "translate-y-0" : "translate-y-full"
            } transition-transform duration-300`}
        >
          {/* Drawer Content */}
          <div className="border-b p-4">
            <div>
              {/* title */}
              <h1 className="font-bold text-neutral">New Event</h1>
            </div>
            <div className="h-[calc(75vh-4rem)] overflow-y-auto p-4">
              {/* content */}
              <form
                ref={ref}
                action={async (formData) => {
                  formAction(formData);
                  ref.current?.reset();
                }}
                className="flex w-full items-stretch justify-between bg-white"
              >
                <div className="mx-auto w-full lg:w-1/2">
                  <div className="w-full">
                    <div className="mx-auto flex w-full flex-col gap-5 sm:max-w-md md:max-w-lg">
                      <input
                        type="text"
                        name="eventName"
                        placeholder="Enter Event Name"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <textarea
                        name="eventDesc"
                        placeholder="Enter Event Description"
                        className="textarea-neutral textarea textarea-bordered w-full text-black placeholder:text-black/70"
                      />
                      <input
                        type="text"
                        name="eventType"
                        placeholder="Enter Event Type"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <input
                        type="date"
                        name="eventDate"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <input
                        type="text"
                        name="eventCeremonyTime"
                        placeholder="Enter Ceremony Time"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <input
                        type="text"
                        name="eventReceptionTime"
                        placeholder="Enter Reception Time"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <input
                        type="text"
                        name="eventCeremonyLoc"
                        placeholder="Enter Ceremony Location"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <input
                        type="text"
                        name="eventReceptionLoc"
                        placeholder="Enter Reception Location"
                        className="input-neutral input input-bordered w-full text-black placeholder:text-black/70"
                      />
                      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-active btn-block max-w-[200px]"
                          disabled={isPending}
                        >
                          Add Event
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
