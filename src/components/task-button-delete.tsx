import prisma from "@/lib/prisma";
import { Button } from "./ui/button"
import { revalidatePath } from "next/cache";
import { removeTask } from "@/actions/tasks-actions"


export function TaskButtonDelete({ taskId }: { taskId: number }) {

  return (
    <form action={removeTask}>
    <input type="hidden" name="taskId" value={taskId} />
    <Button variant="destructive">Delete</Button>
    </form>
    
  )
}

export default TaskButtonDelete