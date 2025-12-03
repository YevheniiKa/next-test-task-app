"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Task } from "@/types/Task";
import Todo from "./Todo";
import { Loader } from "@/components/UI/shadcn-io/ai/loader";

const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(
    "https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks"
  );
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
};

export default function TodoBoard() {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isError) return <p>Error loading tasks</p>;

  const statuses: { id: Task["status"]; label: string }[] = [
    { id: "to-do", label: "To do" },
    { id: "in-progress", label: "In progress" },
    { id: "review", label: "Review" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <ul className="flex gap-8 pt-7 ">
      {statuses.map((status) => {
        const filteredTasks =
          tasks?.filter((t) => t.status === status.id) || [];
        return (
          <li key={status.id}>
            <h2 className="text-[#121212] text-[1rem] font-medium mt-4">
              {status.label} ({filteredTasks.length})
            </h2>
            <ul className="pt-4 flex flex-col gap-6">
              {filteredTasks.map((task) => (
                <Todo
                  key={task.id}
                  status={task.status}
                  title={task.title}
                  description={task.description}
                  assignees={task.assignees}
                  dueDate={task.dueDate}
                />
              ))}

              {Array.from({ length: 3 - filteredTasks.length }).map(
                (_, index) => (
                  <li
                    key={index}
                    className="rounded-[8px] h-54 w-65 flex justify-center items-center border-dashed border-2 border-text-main-grey"
                  >
                    {isLoading && (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center h-12 w-16">
                          <Loader
                            size={24}
                            className="animate-spin [animation-duration:3s]"
                          />
                        </div>
                      </div>
                    )}
                  </li>
                )
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
